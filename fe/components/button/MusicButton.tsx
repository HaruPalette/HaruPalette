import Image from 'next/image';
import styled from '@emotion/styled';
import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { selectProfile, setIsPlay } from '../../store/modules/profile';
import { selectTheme } from '../../store/modules/theme';

const MusicImage = styled(Image)`
  margin-right: 1rem;
  cursor: pointer;

  @media all and (max-width: 500px) {
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
  }
`;

function MusicButton() {
  const user = useAppSelector(selectProfile);
  const dark = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  const audioRef = useRef<HTMLAudioElement>(null);
  const playHandler = () => {
    if (user.isPlay) {
      dispatch(setIsPlay(false));
      audioRef.current?.pause();
    } else {
      dispatch(setIsPlay(true));
      audioRef.current?.play();
    }
  };
  return (
    <>
      <MusicImage
        src={`/assets/img/${user.chrName}/${dark ? 'dark' : 'light'}/${
          user.isPlay ? 'stop' : 'play'
        }.svg`}
        width={40}
        height={40}
        onClick={playHandler}
        alt="play"
      />
      <audio autoPlay loop ref={audioRef}>
        <source src="/assets/sound/bgm.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
}

export default MusicButton;
