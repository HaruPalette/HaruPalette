import styled from '@emotion/styled';
import Header from '../../components/common/Header';
import Model from '../../components/common/Model';
function Shop() {
  return (
    <ShopDiv>
      <Header />
      <Model />
    </ShopDiv>
  );
}
export default Shop;
const ShopDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
