import Image from 'next/image';
import { Dispatch, SetStateAction, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import styled from '@emotion/styled';
import { ColorTypes } from '@emotion/react';
import { useMutation } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useDay } from '../../hooks/useDate';
import { prevTheme } from '../../hooks/useTheme';
import { DiaryData } from '../../types/diariesTypes';
import { useAnswer, useContents } from '../../hooks/useContents';
import { common } from '../../styles/theme';
import { ErrorResponse } from '../../types/commonTypes';
import { DIARIES } from '../../constants/api';
import { usePostDiaries } from '../../apis/diaries';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { selectWeather } from '../../store/modules/weather';
import { selectScript } from '../../store/modules/script';
import { selectProfile } from '../../store/modules/profile';
import {
  changeImageSuccess,
  resetImageSuccess,
  selectDiary,
} from '../../store/modules/diary';

const DetailStyles = styled.div<{ theme: ColorTypes }>`
  width: 30rem;
  min-height: 40rem;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(3px);
  background: ${props => props.theme.background};
  padding: 1rem;
  position: relative;
  border-radius: 1.5rem;

  transform: scale(1);

  @media all and (max-width: 500px) {
    transform: scale(0.65);
    margin-top: -150px;
  }
`;

const DiaryLine = styled.div<{ theme: ColorTypes }>`
  width: 28rem;
  min-height: 36rem;
  border: 1px solid ${props => props.theme.main};
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div<{ theme: ColorTypes }>`
  width: 18.75rem;
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: ${common.fontSize.fs16};
  font-weight: bold;
  color: ${props => props.theme.main};
`;

const ContentList = styled.div<{ theme: ColorTypes; type: string }>`
  width: 25rem;
  height: ${props => (props.type === 'modify' ? '10rem' : 'auto')};
  overflow-y: ${props => (props.type === 'modify' ? 'scroll' : 'hidden')};
  color: ${props => props.theme.main};
  font-size: ${common.fontSize.fs16};
  margin: 1rem 0 1rem 0.5rem;

  ::-webkit-scrollbar {
    width: 1.5rem; /* 스크롤바의 너비 */
  }

  ::-webkit-scrollbar-thumb {
    height: 10%; /* 스크롤바의 길이 */
    background: ${props => props.theme.primary20}; /* 스크롤바의 색상 */
    background-clip: padding-box;
    border: 0.5rem solid transparent;
    border-radius: 2rem;
  }
`;

const ContentItem = styled.div<{ theme: ColorTypes }>`
  border-bottom: 1px solid ${props => props.theme.main};
  margin-bottom: 0.5rem;
`;

const AnswerList = styled.div<{ theme: ColorTypes; type: string }>`
  width: 25rem;
  text-align: center;
  color: ${props => props.theme.main};
  font-size: ${common.fontSize.fs16};
  margin: ${props => (props.type === 'view' ? '1rem auto' : '0')};
  padding: ${props => (props.type === 'view' ? '0.5rem 0' : '0')};
  background: ${props => props.theme.diaryBackground};
  border-radius: 25rem;
`;

const CreateButton = styled.button<{ theme: ColorTypes }>`
  width: 25rem;
  height: 2.8rem;
  background: ${props => props.theme.primary60};
  color: ${common.colors.inheritWhite};
  border-radius: 0.5rem;
  font-size: ${common.fontSize.fs20};
  font-weight: bold;
  text-align: center;
  margin: auto;
`;

const ImageContainer = styled.article`
  display: flex;

  width: 18.75rem;
  height: 18.75rem;
  border-radius: 1rem;
  position: relative;
`;

const DiaryImage = styled.div<{ url: string }>`
  background-image: ${props => `url(${props.url})`};
  background-size: cover;
  background-position: center;

  width: 18.75rem;
  height: 18.75rem;
  border-radius: 1rem;
`;
const Dimmed = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 18.75rem;
  height: 18.75rem;
  border-radius: 1rem;
  position: absolute;
  top: 0;
  left: 0;
`;

const InfoText = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: ${common.colors.inheritWhite};
  text-align: center;
  font-size: 1rem;
  z-index: 1;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.5);
`;

const CustomButton = styled.button<{ theme: ColorTypes }>`
  position: fixed;
  top: 21rem;
  right: 3rem;
  width: 1.5rem;
  height: 1.5rem;
  color: ${props => props.theme.color};
  cursor: pointer;
`;

const ChrSticker = styled(Image)`
  margin: auto;
`;

const WeatherSticker = styled(Image)`
  position: absolute;
  top: 10px;
  left: 300px;
`;

const UserSticker = styled(Image)`
  position: absolute;
  top: 250px;
  left: 40px;
  transform: rotate(-10deg);
`;

function Diary(props: {
  diary: DiaryData;
  type: string;
  save: boolean;
  share: boolean;
  setSave: Dispatch<SetStateAction<boolean>> | null;
  setShare: Dispatch<SetStateAction<boolean>> | null;
  stickerCode: string | null;
}) {
  // 일기 상세조회 정보, 수정("modify") || 디테일("view")
  const { diary, type, save, share, setSave, setShare, stickerCode } = props;
  const theme = prevTheme(diary?.friendEname);
  const title = useDay(diary ? diary.date : '');
  const { image, file } = useAppSelector(selectDiary);
  const dispatch = useAppDispatch();
  // 스티커 경로
  const chrSticker = `/assets/img/${diary?.friendEname}/2d.svg`;
  const weatherSticker = `/assets/img/sticker/${diary?.weather}.svg`;
  const userSticker = `/assets/img/sticker/${diary?.stickerCode}.svg`;

  // 내용 & 위로의 말 자연스러운 줄바꿈
  const contentList = useContents(diary ? diary.contents : '');
  const answerList = useAnswer(diary ? diary.answer : '');

  /** 드랍을 통한 이미지 변경 */
  const handleDrop = (event: {
    preventDefault: () => void;
    dataTransfer: { files: any };
  }) => {
    if (type === 'modify') {
      event.preventDefault();
      const newfile = event.dataTransfer.files?.[0];
      const newImage = URL.createObjectURL(newfile);
      dispatch(changeImageSuccess({ image: newImage, file: newfile }));
    }
  };

  /** 버튼 클릭을 통한 이미지 변경 */
  const handleChange = (event: { target: { files: any } }) => {
    const newfile = event.target.files?.[0];
    const newImage = URL.createObjectURL(newfile);
    dispatch(changeImageSuccess({ image: newImage, file: newfile }));
  };

  /** 이미지 초기화 */
  const handleResetImage = () => {
    dispatch(resetImageSuccess());
  };

  const weather = useAppSelector(selectWeather).curWeather;
  const contents = useAppSelector(selectScript).nowScript.join('\n');
  const friend = useAppSelector(selectProfile).chrPK;
  const mutation = useMutation<AxiosResponse<any>, AxiosError<ErrorResponse>>(
    [DIARIES],
    usePostDiaries(
      stickerCode || 'empty',
      weather,
      contents,
      friend,
      image?.split('blob:')[0],
      file,
    ),
  );

  const handleCreateBtn = () => {
    if (
      window.confirm('지금까지의 내용을 바탕으로\n 일기를 작성하시겠습니까 ?')
    ) {
      mutation.mutate();
      window.location.href = '/calendar';
    }
  };

  // 일기 이미지로 저장
  const diaryRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (diaryRef.current && save) {
      html2canvas(diaryRef.current, {
        backgroundColor: 'transparent',
        useCORS: true,
      }).then(div => {
        div.toBlob((blob: any) => {
          saveAs(blob, 'diary.png');
        });
      });
      if (setSave) setSave(false);
    }
  }, [save]);
  // 일기 이미지로 저장 후 카카오톡 공유
  useEffect(() => {
    if (diaryRef.current && share) {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: 'HARU PALETTE🎨',
          description: '일기장을 공유합니다.',
          imageUrl:
            'https://mblogthumb-phinf.pstatic.net/MjAyMTAyMDRfNjIg/MDAxNjEyNDA4OTk5NDQ4.6UGs399-0EXjIUwwWsYg7o66lDb-MPOVQ-zNDy1Wnnkg.m-WZz0IKKnc5OO2mjY5dOD-0VsfpXg7WVGgds6fKwnIg.JPEG.sunny_side_up12/1612312679152%EF%BC%8D2.jpg?type=w800',
          link: {
            webUrl: window.location.href,
          },
        },
      });
    }
    if (setShare) setShare(false);
  }, [share]);

  useEffect(() => {
    if (diary?.image) {
      dispatch(changeImageSuccess({ image: diary.image, file: null }));
    }
  }, []);

  return (
    <DetailStyles ref={diaryRef} theme={theme}>
      <DiaryLine theme={theme}>
        <Title theme={theme}>{title}</Title>
        <ImageContainer
          onDrop={handleDrop}
          onDragOver={event => event.preventDefault()}
        >
          {type === 'modify' ? (
            <>
              <input
                hidden
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={handleChange}
              />
              <label htmlFor="file-upload">
                <InfoText>
                  드래그 드롭
                  <br />
                  및
                  <br />
                  클릭
                </InfoText>
                <Dimmed />
                <DiaryImage url={image === '' ? diary.image : image} />
              </label>
              <CustomButton
                type="button"
                onClick={handleResetImage}
                theme={theme}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z" />
                </svg>
              </CustomButton>
            </>
          ) : (
            <DiaryImage
              url={diary?.image}
              onClick={() => {
                window.open(diary?.image);
              }}
            />
          )}
        </ImageContainer>
        <ContentList theme={theme} type={type}>
          {contentList.map(item => {
            return (
              <ContentItem theme={theme} key={item}>
                {item}
              </ContentItem>
            );
          })}
        </ContentList>
        {type === 'modify' && (
          <CreateButton type="button" theme={theme} onClick={handleCreateBtn}>
            일기장 완성
          </CreateButton>
        )}
        {type === 'view' && (
          <ChrSticker src={chrSticker} width={95} height={79} alt="chr" />
        )}
        <AnswerList theme={theme} type={type}>
          {type === 'view' &&
            answerList.map(item => {
              return <div key={item}>{item}</div>;
            })}
        </AnswerList>
        <WeatherSticker
          src={weatherSticker}
          width={183}
          height={183}
          alt="weather"
        />
        {diary?.stickerCode !== 'empty' && (
          <UserSticker src={userSticker} width={72} height={72} alt="sticker" />
        )}
      </DiaryLine>
    </DetailStyles>
  );
}

export default Diary;
