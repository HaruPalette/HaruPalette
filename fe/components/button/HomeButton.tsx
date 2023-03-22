import Image from 'next/image';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectProfile } from '../../store/modules/profile';

function HomeButton() {
  const chr = useSelector(selectProfile);
  const icon = `assets/img/${chr.chrName}/home.svg`;
  return (
    <HaruHomeButton>
      <Link href={'/'}>
        <HomeImage src={icon} width={56} height={56} alt="home" />
      </Link>
    </HaruHomeButton>
  );
}

export default HomeButton;

const HaruHomeButton = styled.button`
  position: absolute;
  top: 2rem;
  left: 2rem;
`;

const HomeImage = styled(Image)`
  width: 3.5rem;
  height: 3.5rem;

  @media all and (max-width: 960px) {
    width: 3.5rem;
    height: 3.5rem;
  }
  @media all and (max-width: 480px) {
    width: 2rem;
    height: 2rem;
  }
`;
