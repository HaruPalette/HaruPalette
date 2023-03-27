import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import Header from '../../components/common/Header';
import Model from '../../components/common/Model';
import ShopNav from '../../components/nav/ShopNav';
import useTheme from '../../hooks/useTheme';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { setCompIdx, selectShop } from '../../store/modules/shop';

import { useEffect } from 'react';
import MainPoint from '../../components/shop/MainPoint';
function Shop() {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const openFilterModal = useAppSelector(selectShop).openFilterModal;

  useEffect(() => {
    dispatch(setCompIdx(0));
  }, []);
  return (
    <ShopPage theme={theme}>
      {openFilterModal ? <BlurBg /> : ''}
      <DiaryStyles theme={theme}>
        <Header />
        <Model />
        <MainPoint />
        <ShopNav />
      </DiaryStyles>
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
const DiaryStyles = styled.div<{ theme: ColorTypes }>`
  width: 100vw;
  height: calc(100vh - 5.5rem);
  padding-top: 5.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.background};
`;

const BlurBg = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  z-index: 11;

  background: rgba(136, 136, 136, 0.5);
`;
