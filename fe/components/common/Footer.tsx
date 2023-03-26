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
        <Icon />
        <CopyRight theme={theme}>
          <span>© 2023 Haru Palette. </span>
          <span>All rights reserved.</span>
        </CopyRight>
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

  @media all and (max-width: 960px) {
    padding: 0 1rem;
  }
`;

const CopyRight = styled.p<{ theme: ColorTypes }>`
  font-size: 12px;
  color: ${props => props.theme.color};
  @media screen and (max-width: 960px) {
    font-size: 1vw;
    width: 14rem;
  }
  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: end;
    align-items: center;

    width: 30vw;
    span:nth-of-type(2) {
      display: none;
    }
  }
`;
