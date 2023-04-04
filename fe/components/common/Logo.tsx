import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { selectProfile } from '../../store/modules/profile';
import { common } from '../../styles/theme';
import { changeLinkSuccess } from '../../store/modules/menu';

const HaruLogo = styled(Link)<{ chr: { isLogin: boolean } }>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${common.fontSize.fs48};
  font-weight: bold;

  @media screen and (max-width: 500px) {
    // center
    position: fixed;
    left: ${props => (props.chr.isLogin ? '30%' : '50%')};
    transform: translateX(-50%);
  }
`;

function Logo() {
  const chr = useAppSelector(selectProfile);
  const dispatch = useAppDispatch();
  const handleChangeLink = () => {
    dispatch(changeLinkSuccess(''));
  };
  const logo = `/assets/img/${chr.chrName}/logo.svg`;
  return (
    <HaruLogo href="/" onClick={handleChangeLink} chr={chr}>
      <Image src={logo} width={100} height={88} alt="Logo" priority />
    </HaruLogo>
  );
}

export default Logo;
