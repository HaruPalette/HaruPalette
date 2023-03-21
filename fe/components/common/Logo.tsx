import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useAppSelector } from '../../hooks/reduxHook';
import { selectProfile } from '../../store/modules/profile';

function Logo() {
  const chr = useAppSelector(selectProfile);
  const logo = `assets/img/${chr.chrName}/logo.svg`;
  return (
    <HaruLogo href={'/'}>
      <Image src={logo} width={100} height={100} alt={'Logo'}></Image>
    </HaruLogo>
  );
}

export default Logo;

const HaruLogo = styled(Link)`
  font-size: 3rem;
  font-weight: bold;
  margin-right: 32px;
`;
