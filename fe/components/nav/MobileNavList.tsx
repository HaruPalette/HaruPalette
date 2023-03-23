import styled from '@emotion/styled';
import React from 'react';

function MobileNavList() {
  return (
    <HaruNav>
      <i className=""></i>
    </HaruNav>
  );
}

export default MobileNavList;

const HaruNav = styled.nav`
  display: none;

  width: 6rem;

  @media screen and (max-width: 500px) {
    display: flex;
  }
`;
