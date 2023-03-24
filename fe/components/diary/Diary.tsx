import Image from 'next/image';
import styled from '@emotion/styled';
import { useDay } from '../../hooks/useDate';
import { prevTheme } from '../../hooks/useTheme';
import { DiaryData } from '../../types/diariesTypes';
import { WEATHER_LIST } from '../../constants/weather';
import { useAnswer, useContents } from '../../hooks/useContents';

function Diary(props: { diary: DiaryData; type: string }) {
  // 일기 상세조회 정보, 수정("modify") || 디테일("view")
  const { diary, type } = props;
  const theme = prevTheme(diary.ename);
  const title = useDay(diary.date);

  // 스티커 경로
  const chrSticker = `assets/img/${diary.ename}/2d.svg`;
  const weatherSticker = `assets/img/sticker/${diary.weather}.svg`;
  const userSticker = `assets/img/sticker/${diary.stickerCode}.svg`;

  // 내용 & 위로의 말 자연스러운 줄바꿈
  const contentList = useContents(diary.contents);
  const answerList = useAnswer(diary.answer);
  return (
    <DetailStyles>
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

const DetailStyles = styled.div``;
const Title = styled.div``;
const Content = styled.div``;
