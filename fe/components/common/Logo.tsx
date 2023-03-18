import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  return (
    <HaruLogo href={'/'}>
      <Image
        src={'next.svg'}
        width={100}
        height={100}
        alt={'Next Logo'}
      ></Image>
    </HaruLogo>
  );
}

export default Logo;

const HaruLogo = styled(Link)`
  font-size: 3rem;
  font-weight: bold;
  margin-right: 32px;
`;
