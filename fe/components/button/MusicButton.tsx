import Image from 'next/image';
import styled from '@emotion/styled';
import { useAppSelector } from '../../hooks/reduxHook';
import { selectProfile } from '../../store/modules/profile';
import { selectTheme } from '../../store/modules/theme';

const MusicImage = styled(Image)`
  margin-right: 1rem;

  @media all and (max-width: 500px) {
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
  }
`;

function MusicButton() {
  const user = useAppSelector(selectProfile);
  const dark = useAppSelector(selectTheme);
  return (
    <MusicImage
      src={`/assets/img/${user.chrName}/${dark ? 'dark' : 'light'}/${
        user.isPlay ? 'stop' : 'play'
      }.svg`}
      width={40}
      height={40}
      alt="play"
    />
  );
}

export default MusicButton;
