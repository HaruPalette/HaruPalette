import styled from '@emotion/styled';
import Link from 'next/link';

function HomeButton() {
  return <HomeLink href={'/'}>Home</HomeLink>;
}

export default HomeButton;

const HaruHomeButton = styled.button`
  border: 0;
  outline: 0;
  padding: 0;

  width: 5rem;
  height: 3rem;

  background-color: '#123456';
`;

const HomeLink = styled(Link)`
  color: black;
  text-decoration: none;

  margin: 0 auto;
`;
