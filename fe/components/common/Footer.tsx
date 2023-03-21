import styled from '@emotion/styled';
import Logo from './Logo';
import Icon from './Icon';
import useTheme from '../../hooks/useTheme';
import { ColorTheme } from '../../styles/theme';

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

const HaruFooter = styled.footer<{ theme?: ColorTheme }>`
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

  padding: 0 160px;

  font-size: 1rem;
`;
