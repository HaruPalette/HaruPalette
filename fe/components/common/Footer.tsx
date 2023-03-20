import styled from '@emotion/styled';
import Logo from './Logo';
import Icon from './Icon';

function Footer() {
  return (
    <HaruFooter>
      <FooterContainer>
        <Logo />
        <Icon />
        © 2020 Lift Media. All rights reserved.
      </FooterContainer>
    </HaruFooter>
  );
}

export default Footer;

const primary = 'pink';
const inheritBlack = 'black';
const inheritWhite = 'white';

const HaruFooter = styled.footer`
  width: 100vw;
  position: fixed;
  left: 0;
  bottom: 0;
  background: ${inheritBlack};
  color: ${inheritWhite};
`;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 160px;

  font-size: 1rem;
`