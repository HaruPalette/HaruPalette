import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useAppSelector } from '../../hooks/reduxHook';
import useScript from '../../hooks/useScript';
import useTheme from '../../hooks/useTheme';
import { selectTheme } from '../../store/modules/theme';
import { TalkData } from '../../types/commonTypes';

const TalkContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 5rem;
`;

const Talk = styled.h1<{ theme: ColorTypes; isDark: boolean; type: string }>`
  z-index: 99;
  font-size: 2rem;
  background: linear-gradient(
    to right,
    ${props => (props.type === 'main' ? props.theme.color : props.theme.sub)},
    ${props => (props.type === 'main' ? props.theme.color : props.theme.main)}
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

function ScriptTalk(props: { talkData: TalkData[]; type: string }) {
  const { talkData, type } = props;
  const theme = useTheme();
  const isDark = useAppSelector(selectTheme);
  const scriptData = useScript(talkData, type);

  useEffect(() => {
    scriptData.start();
  }, []);

  return (
    <TalkContainer>
      <Talk theme={theme} isDark={isDark} type={type}>
        {scriptData.text}
      </Talk>
    </TalkContainer>
  );
}

export default ScriptTalk;
