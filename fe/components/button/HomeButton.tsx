import styled from '@emotion/styled';
import Link from 'next/link';

function HomeButton() {
  return (
    <HaruHomeButton>
      <HomeLink href={'/'}>Home</HomeLink>
    </HaruHomeButton>
  );
}

export default HomeButton;

const HaruHomeButton = styled.button`
  position: absolute;

  border: 0;
  padding: 0;

  width: 5rem;
  height: 3rem;
`;

const HomeLink = styled(Link)`
  color: black;
  text-decoration: none;

  margin: 0 auto;
`;
