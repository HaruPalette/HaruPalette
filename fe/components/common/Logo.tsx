import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useAppSelector } from '../../hooks/reduxHook';
import { selectProfile } from '../../store/modules/profile';
import { common } from '../../styles/theme';

const HaruLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${common.fontSize.fs48};
  font-weight: bold;
`;

function Logo() {
  const chr = useAppSelector(selectProfile);
  const logo = `assets/img/${chr.chrName}/logo.svg`;
  return (
    <HaruLogo href="/">
      <Image src={logo} width={100} height={88} alt="Logo" priority />
    </HaruLogo>
  );
}

export default Logo;
