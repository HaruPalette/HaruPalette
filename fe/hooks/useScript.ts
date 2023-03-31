import { useEffect, useState } from 'react';
import { SCRIPT } from '../constants/script';
import { useAppSelector } from './reduxHook';
import { selectScript } from '../store/modules/script';
import { TalkData } from '../types/commonTypes';

const useScript = (talkData: TalkData[], type: string) => {
  const [text, setText] = useState<string>('');
  const [index, setIndex] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const scriptIndex = useAppSelector(selectScript).curScriptIndex;
  let scripts =
    type === 'create' ? talkData[scriptIndex].script : talkData[0].script;

  const start = () => {
    scripts = SCRIPT[scriptIndex].script;
    setText('');
    setIndex(0);
    setIsTyping(true);
  };

  useEffect(() => {
    if (!isTyping) return;
    const script = scripts[index];
    const typingInterval = setInterval(() => {
      setText(prev => {
        if (prev.length === script.length - 1) {
          clearInterval(typingInterval);
          setTimeout(() => {
            setIsTyping(false);
            return prev;
          }, 800);
        }
        return prev + script[prev.length];
      });
    }, 100);
  }, [isTyping]);

  useEffect(() => {
    if (isTyping) return;
    if (index === scripts.length - 1) return;
    const removeInterval = setInterval(() => {
      setText(prev => {
        if (prev.length === 0) {
          clearInterval(removeInterval);
          setIsTyping(true);
          setIndex(prevIdx => {
            return prevIdx === scripts.length - 1 ? prevIdx : prevIdx + 1;
          });
          return prev;
        }
        return prev.slice(0, prev.length - 1);
      });
    }, 100);
  }, [isTyping]);

  useEffect(() => {
    start();
  }, [scriptIndex]);

  return { text, start };
};

export default useScript;
