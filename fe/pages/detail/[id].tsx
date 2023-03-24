import { useEffect } from 'react';
import { DiaryData } from '../../types/diariesTypes';
import Diary from '../../components/diary/Diary';
import KakaoShareButton from '../../components/button/KakaoShareButton';
import SaveImageButton from '../../components/button/SaveImageButton';

function Detail() {
  // axios로 받아올 일기 상세조회
  const diary: DiaryData = {
    diaryId: 1,
    date: '2023-03-12',
    contents:
      '오늘은 팀 사진을 찍었다. 사진을 보았는데 정말 인간지네 같다. 잊지 못할 것 같은 하루다.',
    weather: 'Clear',
    ename: 'haru',
    answer: `너는 좋은 일들만 끌어당겨
        그것도 아주 많이! 🧲`,
    image:
      'http://dimg.donga.com/ugc/CDB/WEEKLY/Article/5b/b3/22/85/5bb32285000ed2738de6.jpg',
    stickerCode: 'nice',
    neutral: 60,
    happy: 20,
    surprise: 10,
    anger: 5,
    disgust: 1,
    anxiety: 2,
    sadness: 2,
  };
  useEffect(() => {
    //   이걸로 상세조회 요청 (일기 PK값)
    console.log(window.location.href.split('detail/')[1]);
  }, []);
  return (
    <>
      <Diary diary={diary} type={'view'} />
      <SaveImageButton />
      <KakaoShareButton />
    </>
  );
}

export default Detail;
