import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import useTheme from '../../hooks/useTheme';
import { ColorTypes } from '@emotion/react';

function Horizontal(props: { percent: number }) {
  const { percent } = props;
  // 주간이면 props로 n/7 * 100
  // 월간이면 props로 n/일수 * 100
  // 감정 : % 단위로 받음
  // 즉, 퍼센트 값을 props로 전달받아야 함 !!!
  // const percent = Math.floor((4 / 7) * 100);
  const theme = useTheme();
  return (
    <ProgressWrap theme={theme}>
      <ProgressBar theme={theme} percent={percent} />
    </ProgressWrap>
  );
}

// width 늘어나는 애니메이션
const animation = (percent: number) => keyframes`
    0% {
      width: 0%;
    }
    100% {
      width: ${percent}%;
    }
`;

// 진행바 배경
const ProgressWrap = styled.div<{ theme?: ColorTypes }>`
  width: 100%;
  height: 1rem;
  background: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.border};
  border-radius: 1rem;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
`;
// 진행바
const ProgressBar = styled.div<{ theme: ColorTypes; percent: number }>`
  width: ${props => props.percent}%;
  height: 1rem;
  border-radius: 1rem;
  background: ${props => props.theme.primary20};
  animation: ${props => animation(props.percent)} 2.5s ease;
`;

export default Horizontal;
