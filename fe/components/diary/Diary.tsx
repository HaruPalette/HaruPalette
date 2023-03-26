import Image from 'next/image';
import { Dispatch, SetStateAction, useRef, useEffect } from 'react';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import styled from '@emotion/styled';
import { useDay } from '../../hooks/useDate';
import { prevTheme } from '../../hooks/useTheme';
import { DiaryData } from '../../types/diariesTypes';
import { useAnswer, useContents } from '../../hooks/useContents';
import { ColorTypes } from '@emotion/react';

function Diary(props: {
  diary: DiaryData;
  type: string;
  save: boolean;
  share: boolean;
  setSave: Dispatch<SetStateAction<boolean>>;
  setShare: Dispatch<SetStateAction<boolean>>;
}) {
  // 일기 상세조회 정보, 수정("modify") || 디테일("view")
  const { diary, type, save, share, setSave, setShare } = props;
  const theme = prevTheme(diary.ename);
  const title = useDay(diary.date);

  // 스티커 경로
  const chrSticker = `assets/img/${diary.ename}/2d.svg`;
  const weatherSticker = `assets/img/sticker/${diary.weather}.svg`;
  const userSticker = `assets/img/sticker/${diary.stickerCode}.svg`;

  // 내용 & 위로의 말 자연스러운 줄바꿈
  const contentList = useContents(diary.contents);
  const answerList = useAnswer(diary.answer);

  // 일기 이미지로 저장
  const diaryRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (diaryRef.current && save) {
      domtoimage.toBlob(diaryRef.current).then((blob: any) => {
        saveAs(blob, 'diary.png');
      });
      setSave(false);
    }
  }, [save]);
  // 일기 이미지로 저장 후 카카오톡 공유
  useEffect(() => {
    if (diaryRef.current && share) {
      domtoimage.toBlob(diaryRef.current).then((blob: any) => {
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
      });
    }
    setShare(false);
  }, [share]);
  return (
    <DetailStyles ref={diaryRef} theme={theme}>
      <Title>{title}</Title>
      <Image src={diary.image} width={374} height={374} alt="img" />
      <Content>
        {contentList.map(item => {
          return <div>{item}</div>;
        })}
      </Content>
      {type === 'view' && <button type="button">일기장 완성</button>}
      {type === 'modify' &&
        answerList.map(item => {
          return <div>{item}</div>;
        })}
    </DetailStyles>
  );
}

export default Diary;

const DetailStyles = styled.div<{ theme: ColorTypes }>`
  width: 38rem;
  height: 50rem;
  background: ${props => props.theme.main};
`;
const Title = styled.div``;
const Content = styled.div``;
