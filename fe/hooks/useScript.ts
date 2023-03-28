import { useEffect, useState } from 'react';

const useScript = (scripts: string[]) => {
  const [text, setText] = useState<string>('');
  const [index, setIndex] = useState<number>(0);

  const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const typing = async () => {
    const script = scripts[index];
    console.log(`script length: ${script.length}`);
    for (let i = 1; i <= script.length; i++) {
      await wait(100);

      const nextText = script.slice(0, i);
      console.log(nextText);
      setText(nextText);
    }

    await wait(800);
  };

  const remove = async () => {
    const script = scripts[index].split('');

    while (script.length) {
      await wait(100);
      script.pop();
      setText(prevText => prevText.slice(0, prevText.length - 1));
    }
    // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
    setIndex(prevIndex =>
      prevIndex === scripts.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return { text, typing, remove };
};

export default useScript;
