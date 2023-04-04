import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import Header from '../../components/common/Header';
import Model from '../../components/common/ModelShopMainCopy';
import ShopNav from '../../components/nav/ShopNav';
import useTheme from '../../hooks/useTheme';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { selectShop, setCompIdx } from '../../store/modules/shop';
import FilterModal from '../../components/shop/FilterModal';
import { selectProfile } from '../../store/modules/profile';
import MainPoint from '../../components/shop/MainPoint';
import Challenge from '../../components/shop/Challenge';
import BuyingBuddy from '../../components/shop/BuyingBuddy';
import PointDetail from '../../components/shop/PointDetail';

const ShopPage = styled.div<{ theme: ColorTypes }>`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.shopBackground};
`;

const DiaryStyles = styled.div<{ theme: ColorTypes }>`
  width: calc(100vw - 320px);
  height: calc(100vh);
  /* margin: 0 160px; */
  padding-top: 5.5rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  @media all and (max-width: 1150px) {
    height: auto;
    width: calc(100vw - 320px);
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
  @media all and (max-width: 960px) {
    width: calc(100vw);
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
`;

const LeftDiv = styled.div`
  width: 40vw;
  height: 100%;
  /* border: 3px solid green; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media all and (max-width: 1150px) {
    width: calc(100vw - 320px);
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
  }
  @media all and (max-width: 960px) {
    width: calc(100vw);
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media all and (max-width: 500px) {
    width: calc(100vw);
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
  }
`;
const RightDiv = styled.div`
  width: 60vw;
  height: 100%;
  /* border: 3px solid tomato; */
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  @media all and (max-width: 1150px) {
    width: calc(100vw - 320px);
    justify-content: center;
    align-items: center;
  }
  @media all and (max-width: 960px) {
    width: calc(100vw);
    justify-content: center;
    align-items: center;
  }
`;

const ContentDiv = styled.div<{ theme: ColorTypes }>`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 500px;
  margin-top: 40px;
  margin-bottom: 40px;
  color: ${props => props.theme.color};
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

function Shop() {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const openFilterModalData = useAppSelector(selectShop).openFilterModal;
  const currCharName = useAppSelector(selectProfile).chrName;
  const compIdx = useAppSelector(selectShop).currCompIdx;
  useEffect(() => {
    dispatch(setCompIdx(0));
  }, []);
  return (
    <ShopPage theme={theme}>
      {openFilterModalData ? <FilterModal /> : ''}
      {openFilterModalData ? <BlurBg /> : ''}
      <Header />
      <DiaryStyles theme={theme}>
        <LeftDiv>
          <Model data={currCharName} />
          <MainPoint />
        </LeftDiv>
        <RightDiv>
          <ShopNav />
          <ContentDiv theme={theme}>
            {(() => {
              if (compIdx === 1) return <PointDetail />;
              if (compIdx === 2) return <BuyingBuddy />;
              return <Challenge />;
            })()}
          </ContentDiv>
        </RightDiv>
      </DiaryStyles>
    </ShopPage>
  );
}

export default Shop;
