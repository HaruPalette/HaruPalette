import Image from 'next/image';
import { Dispatch, SetStateAction, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import styled from '@emotion/styled';
import { ColorTypes } from '@emotion/react';
import { useDay } from '../../hooks/useDate';
import { prevTheme } from '../../hooks/useTheme';
import { DiaryData } from '../../types/diariesTypes';
import { useAnswer, useContents } from '../../hooks/useContents';
import { common } from '../../styles/theme';

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
`;

const Title = styled.div<{ theme: ColorTypes }>`
  margin-left: 4rem;
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

const DiaryImage = styled(Image)`
  width: 18.75rem;
  height: 18.75rem;
  border-radius: 1rem;
  margin: 1rem auto;
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
}) {
  // 일기 상세조회 정보, 수정("modify") || 디테일("view")
  const { diary, type, save, share, setSave, setShare } = props;
  const theme = prevTheme(diary.ename);
  const title = useDay(diary.date);

  // 스티커 경로
  const chrSticker = `/assets/img/${diary.ename}/2d.svg`;
  const weatherSticker = `/assets/img/sticker/${diary.weather}.svg`;
  const userSticker = `/assets/img/sticker/${diary.stickerCode}.svg`;

  // 내용 & 위로의 말 자연스러운 줄바꿈
  const contentList = useContents(diary.contents);
  const answerList = useAnswer(diary.answer);

  // 일기 이미지로 저장
  const diaryRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (diaryRef.current && save) {
      // domtoimage.toBlob(diaryRef.current).then((blob: any) => {
      //   saveAs(blob, 'diary.png');
      // });
      html2canvas(diaryRef.current, { backgroundColor: 'rgba(0,0,0,0)' }).then(
        div => {
          div.toBlob((blob: any) => {
            saveAs(blob, 'diary.png');
          });
        },
      );
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
  return (
    <DetailStyles ref={diaryRef} theme={theme}>
      <DiaryLine theme={theme}>
        <Title theme={theme}>{title}</Title>
        <DiaryImage src={diary.image} width={300} height={300} alt="img" />
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
          <CreateButton type="button" theme={theme}>
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
        {diary.stickerCode !== 'empty' && (
          <UserSticker src={userSticker} width={72} height={72} alt="sticker" />
        )}
      </DiaryLine>
    </DetailStyles>
  );
}

export default Diary;
