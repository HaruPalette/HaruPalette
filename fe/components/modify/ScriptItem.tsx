import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { ColorTypes } from '@emotion/react';
import { selectScript, setScript } from '../../store/modules/script';
import useTheme from '../../hooks/useTheme';
import { common } from '../../styles/theme';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';

const Container = styled.div<{ theme: ColorTypes }>`
  width: 23rem;
  height: 6rem;
  text-align: left;
  color: ${props => props.theme.color};
`;
const Script = styled.textarea<{ theme: ColorTypes }>`
  all: unset;
  width: 100%;
  height: 100%;
  margin-top: 1rem;
  padding: 1rem;
  background: #f2f2f2;
  border-radius: 1rem;
  overflow-y: scroll;
  color: ${common.colors.dark};

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

function ScriptItem(props: { index: number }) {
  const { index } = props;
  const [nowScript, setNowScript] = useState(`${index}번째 스크립트입니다.`);

  const theme = useTheme();
  const dispatch = useAppDispatch();

  const script: string[] = [...useAppSelector(selectScript).nowScript];

  useEffect(() => {
    if (script.length < index + 1) {
      script.push(nowScript);
      dispatch(setScript(script));
    }
  }, [script]);

  const handleScript = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const eventTarget = e.target;
    setNowScript(eventTarget.value);
    script[index] = eventTarget.value;
    dispatch(setScript(script));
  };
  return (
    <Container theme={theme}>
      {script.length < index && (
        <Script theme={theme} defaultValue="로딩 중 ..." />
      )}
      {script.length >= index && (
        <Script
          defaultValue={nowScript}
          theme={theme}
          onChange={handleScript}
        />
      )}
    </Container>
  );
}

export default ScriptItem;
