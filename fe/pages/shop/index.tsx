import styled from '@emotion/styled';
import Header from '../../components/common/Header';
import Model from '../../components/common/ModelYeoJi';
// import Model from '../../components/common/ModelChangGyoem';
function Shop() {
  return (
    <ShopTopDiv>
      <Model />
    </ShopTopDiv>
  );
}
export default Shop;
const ShopTopDiv = styled.div`
  position: absolute;
  width: 1000px;
  height: 400px;
  // top: 50px;
`;
