import styled from '@emotion/styled';
import Logo from './Logo';
import Icon from './Icon';
import useTheme from '../../hooks/useTheme';
import { common } from '../../styles/theme';
import { ColorTypes } from '@emotion/react';

function Footer() {
  const theme = useTheme();
  return (
    <HaruFooter theme={theme}>
      <FooterContainer>
        <Logo />
        <Icon />© 2020 Lift Media. All rights reserved.
      </FooterContainer>
    </HaruFooter>
  );
}

export default Footer;

const HaruFooter = styled.footer<{ theme: ColorTypes }>`
  width: 100vw;
  position: fixed;
  left: 0;
  bottom: 0;
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 10rem;

  font-size: ${common.fontSize.fs16};
`;
