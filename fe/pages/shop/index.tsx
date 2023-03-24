import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import Header from '../../components/common/Header';
import Model from '../../components/common/Model';
import useTheme from '../../hooks/useTheme';
function Shop() {
  const theme = useTheme();
  return (
    <ShopPage theme={theme}>
      <Header />
      <Model />
    </ShopPage>
  );
}

export default Shop;

const ShopPage = styled.div<{ theme: ColorTypes }>`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.background};
`;
