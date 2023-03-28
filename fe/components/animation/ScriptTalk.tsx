import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import SCRIPT from '../../constants/script';
import { useAppSelector } from '../../hooks/reduxHook';
import useScript from '../../hooks/useScript';
import useTheme from '../../hooks/useTheme';
import { selectScript } from '../../store/modules/script';
import { selectTheme } from '../../store/modules/theme';

const Talk = styled.h1<{ theme: ColorTypes; isDark: boolean }>`
  z-index: 99;
  font-size: 2.2rem;
  background: linear-gradient(
    to right,
    ${props => props.theme.sub},
    ${props => props.theme.main}
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function ScriptTalk() {
  const theme = useTheme();
  const isDark = useAppSelector(selectTheme);
  const index = useAppSelector(selectScript).curScriptIndex;
  const scriptData = useScript(SCRIPT[index].script);

  useEffect(() => {
    scriptData.typing();
  }, [index]);

  return (
    <Talk theme={theme} isDark={isDark}>
      {scriptData.text}
    </Talk>
  );
}

export default ScriptTalk;
