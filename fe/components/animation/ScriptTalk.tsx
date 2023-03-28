import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import SCRIPT from '../../constants/script';
import { useAppSelector } from '../../hooks/reduxHook';
import useScript from '../../hooks/useScript';
import useTheme from '../../hooks/useTheme';
import { selectTheme } from '../../store/modules/theme';

const Talk = styled.h1<{ theme: ColorTypes; isDark: boolean }>`
  z-index: 99;
  font-size: 2.2rem;
  background: linear-gradient(
    to right,
    ${props => props.theme.primary20},
    ${props => props.theme.primary60}
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function ScriptTalk() {
  const theme = useTheme();
  const isDark = useAppSelector(selectTheme);
  const [index, setIndex] = useState<number>(0);
  const scriptData = useScript(SCRIPT[index].script);
  const cnt = SCRIPT[index].script.length;

  useEffect(() => {
    console.log(`cnt: ${cnt}`);
    for (let i = 0; i < cnt - 1; i++) {
      scriptData.typing();
      scriptData.remove();
    }
    scriptData.typing();
  }, []);

  return (
    <Talk theme={theme} isDark={isDark}>
      {scriptData.text}
    </Talk>
  );
}

export default ScriptTalk;
