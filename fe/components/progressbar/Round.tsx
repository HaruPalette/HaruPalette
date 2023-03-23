import Image from 'next/image';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useAppSelector } from '../../hooks/reduxHook';
import useTheme from '../../hooks/useTheme';
import { selectProfile } from '../../store/modules/profile';
import { ColorTypes } from '@emotion/react';
import dynamic from 'next/dynamic';

function Round() {
  // props : 과제 완료 현황(percent), 색상 값(20, 40, 60, 80), 과제 내용
  // 과제 완료 현황
  const percent = Math.floor(33);
  // 색상 값
  const primary: string = 'primary20';
  // 현재 테마 가져오기
  const theme = useTheme();
  // 현재 선택된 캐릭터 가져오기
  const chr = useAppSelector(selectProfile);
  // 일기장 이미지 가져오기
  const diary = `assets/img/${chr.chrName}/${primary}_diary.svg`;
  // 과제 내용 및 현황
  const content = '일기 3번 작성하기';
  //   const AnimatedNumbers = dynamic(() => import('react-animated-numbers'), {
  //     ssr: false,
  //   });
  return (
    <Container>
      <ProgressWrap>
        <ProgressBar1 cx="110" cy="110" r="110" />
        <ProgressBar2
          cx="110"
          cy="110"
          r="110"
          theme={theme}
          percent={percent}
          primary={primary}
        />
      </ProgressWrap>
      <Diary src={diary} width={120} height={126} alt="diary" />
      <Challenge>
        <div>{content}</div>

        <Percent>1/3</Percent>
      </Challenge>
    </Container>
  );
}

const stroke: number = 690;

const animation = (percent: number) => keyframes`
    0% {
        stroke-dashoffset: ${stroke};
    }
    100% {
        stroke-dashoffset: calc(${stroke} - (${stroke} * ${percent})) / 100;
    }
`;

const Container = styled.div`
  position: relative;
  width: 240px;
  height: 240px;
  /* 반응형에 따라 스케일 바꾸기 */
  /* transform: scale(0.75); */
`;

const ProgressWrap = styled.svg`
  width: 100%;
  height: 100%;
  position: relative;
  transform: rotate(-90deg);
  transition: transform 0.2s;
  filter: drop-shadow(-4px 4px 2px rgba(0, 0, 0, 0.25));
`;
const ProgressBar1 = styled.circle`
  width: 100%;
  height: 100%;
  fill: none;
  stroke-width: 20;
  transform: translate(10px, 10px);
  stroke-dasharray: ${stroke};
  stroke-dashoffset: 0;
  stroke-linecap: round;
  stroke: white;
`;
const ProgressBar2 = styled.circle<{
  theme: ColorTypes;
  percent: number;
  primary: string;
}>`
  width: 100%;
  height: 100%;
  fill: none;
  stroke-width: 20;
  transform: translate(10px, 10px);
  stroke-dasharray: ${stroke};
  stroke-dashoffset: calc(
    ${stroke} - (${stroke} * ${props => props.percent}) / 100
  );
  stroke-linecap: round;
  stroke: ${props =>
    props.primary === 'primary20'
      ? props.theme.primary20
      : props.primary === 'primary40'
      ? props.theme.primary40
      : props.primary === 'primary60'
      ? props.theme.primary60
      : props.theme.primary80};
  animation: ${props => animation(props.percent)} 2s linear;
`;

const Diary = styled(Image)`
  position: absolute;
  /* top: 0으로 바꿔야 함 */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(0.5);
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
`;

const Challenge = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 30%;
  left: 0;
  transform: scale(0.75);
  text-align: center;
`;

const Percent = styled.div`
  font-size: 3rem;
  font-weight: bold;
`;

export default Round;
