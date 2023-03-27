import styled from '@emotion/styled';
import { ColorTypes } from '@emotion/react';
import useTheme from '../../hooks/useTheme';

const ProgressWrap = styled.div<{ theme: ColorTypes }>`
  width: 100%;
  height: 0.25rem;
  background: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.border};
  border-radius: 1rem;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
`;

const ProgressBar = styled.div<{ theme: ColorTypes; second: number }>`
  width: ${props => (props.second * 10) / 6}%;
  height: 0.25rem;
  border-radius: 1rem;
  background: ${props => props.theme.primary20};
`;

function RecodeProgressBar(props: { second: number }) {
  const { second } = props;
  const theme = useTheme();
  return (
    <ProgressWrap theme={theme}>
      <ProgressBar theme={theme} second={second} />
    </ProgressWrap>
  );
}

export default RecodeProgressBar;
