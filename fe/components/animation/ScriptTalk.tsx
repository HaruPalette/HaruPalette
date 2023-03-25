import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/reduxHook';
import useTheme from '../../hooks/useTheme';
import { selectTheme } from '../../store/modules/theme';

const scripts: string[] = [
  '안녕, 반가워',
  '오늘 하루는 어땠어?',
  '난 죽을 것 같아',
];
const speed: number = 100;

function ScriptTalk() {
  const theme = useTheme();
  const isDark = useAppSelector(selectTheme);
  const [text, setText] = useState<string>('');
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const typing = async () => {
      const script = scripts[index];
      console.log(text.length);
      for (let i = 1; i <= script.length; i++) {
        await wait(speed);

        const nextText: string = script.slice(0, i);
        setText(nextText);
      }

      console.log(script.length);
      await wait(800);

      remove();
    };

    const remove = async () => {
      const script = scripts[index].split('');

      console.log(script);
      while (script.length) {
        await wait(speed);
        script.pop();
        setText(prevText => prevText.slice(0, prevText.length - 1));
      }
      // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
      setIndex(prevIndex =>
        prevIndex === scripts.length - 1 ? 0 : prevIndex + 1,
      );

      typing();
    };

    const wait = (ms: number) => new Promise(() => setTimeout(() => {}, ms));

    setTimeout(typing, 1500);

    return () => {
      clearTimeout(undefined);
    };
  }, []);

  return (
    <Talk theme={theme} isDark={isDark}>
      {text}
    </Talk>
  );
}

export default ScriptTalk;

const Talk = styled.h1<{ theme: ColorTypes; isDark: boolean }>`
  z-index: 99;
  font-size: 2.2rem;
  margin-left: 0.6rem;
  background: linear-gradient(
    to right,
    ${props => props.theme.primary20},
    ${props => props.theme.primary60}
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
