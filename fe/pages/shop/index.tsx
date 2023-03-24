import styled from '@emotion/styled';
import Header from '../../components/common/Header';
import Model from '../../components/common/Model';
import ShopNav from '../../components/nav/ShopNav';
import useTheme from '../../hooks/useTheme';
import { ColorTypes } from '@emotion/react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { setCompIdx, selectShop } from '../../store/modules/shop';

import { useEffect } from 'react';
function Shop() {
  const dispatch = useAppDispatch();
  const theme = useTheme();

  useEffect(() => {
    dispatch(setCompIdx(0));
  }, []);
  return (
    <ShopDiv>
      <DiaryStyles theme={theme}>
        <Header />
        <Model />
        <ShopNav />
      </DiaryStyles>
    </ShopDiv>
  );
}
export default Shop;
const ShopDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
const DiaryStyles = styled.div<{ theme: ColorTypes }>`
  width: 100vw;
  height: calc(100vh - 5.5rem);
  padding-top: 5.5rem;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.background};
`;
