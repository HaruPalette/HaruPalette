import Image from 'next/image';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectProfile } from '../../store/modules/profile';
import { keyframes } from '@emotion/react';
import { useAppDispatch } from '../../hooks/reduxHook';
import { changeLinkSuccess } from '../../store/modules/menu';

function HomeButton() {
  const chr = useSelector(selectProfile);
  const icon = `assets/img/${chr.chrName}/home.svg`;
  const dispatch = useAppDispatch();
  const handleChangeLink = (link: string) => {
    dispatch(changeLinkSuccess(link));
  };
  return (
    <HaruHomeButton type="button">
      <Link href={'/'} onClick={() => handleChangeLink('/')}>
        <HomeImage src={icon} width={56} height={56} alt="home" />
      </Link>
    </HaruHomeButton>
  );
}

export default HomeButton;

const HomeImageHover = keyframes`

  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-4px);
  }
  100% {
    transform: translateY(0px);
  }

`;

const HaruHomeButton = styled.button``;

const HomeImage = styled(Image)`
  width: 3.5rem;
  height: 3.5rem;

  &:hover {
    animation: ${HomeImageHover} 0.8s ease-in-out infinite;
  }

  @media all and (max-width: 960px) {
    width: 3.5rem;
    height: 3.5rem;
  }
  @media all and (max-width: 480px) {
    width: 2rem;
    height: 2rem;
  }
`;
