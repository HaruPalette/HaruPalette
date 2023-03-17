import Image from 'next/image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

function Footer() {
  const iconItem = [
    'assets/img/common/dark/dark_facebook.svg',
    'assets/img/common/dark/dark_Linkedin.svg',
    'assets/img/common/dark/dark_Twitter.svg',
  ];
  const icon = iconItem.map(item => {
    return (
      <Image
        css={{
          margin: '0 48px',
        }}
        key={item}
        src={item}
        width={35}
        height={35}
        alt="icon"
      />
    );
  });
  return (
    <StylesFooter>
      <div
        css={{
          fontSize: '48px',
          fontWeight: 'bold',
        }}
      >
        LOGO
      </div>
      <div>{icon}</div>
      <div css={{ fontSize: '12px' }}>
        © 2020 Lift Media. All rights reserved.
      </div>
    </StylesFooter>
  );
}

export default Footer;

const StylesFooter = styled.div`
  height: 88px;
  width: calc(100vw - 320px);
  position: fixed;
  padding: 0 160px;
  bottom: 0;
  left: 0;
  background: black;
  color: white;
  display: flex;
  flex-diraction: row;
  align-items: center;
  justify-content: space-between;
`;
