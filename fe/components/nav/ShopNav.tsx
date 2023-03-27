import styled from '@emotion/styled';
import { SHOP_NAV_LIST } from '../../constants/nav';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { setCompIdx, selectShop } from '../../store/modules/shop';
import { ColorTypes } from '@emotion/react';
import useTheme from '../../hooks/useTheme';
import Challenge from '../shop/Challenge';
import BuyingBuddy from '../shop/BuyingBuddy';
import PointDetail from '../shop/PointDetail';
import { common } from '../../styles/theme';

function ShopNav() {
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const currCompIdx = useAppSelector(selectShop).currCompIdx;

  return (
    <>
      <ButtonsDiv>
        {SHOP_NAV_LIST.map((item, index) =>
          index === currCompIdx ? (
            <CurrButton
              theme={theme}
              key={item.index}
              onClick={() => dispatch(setCompIdx(item.index))}
            >
              {item.title}
            </CurrButton>
          ) : (
            <Button
              theme={theme}
              key={item.index}
              onClick={() => dispatch(setCompIdx(item.index))}
            >
              {item.title}
            </Button>
          ),
        )}
      </ButtonsDiv>

      <ContentDiv theme={theme}>
        {currCompIdx === 0 ? (
          <Challenge />
        ) : currCompIdx === 1 ? (
          <PointDetail />
        ) : (
          <BuyingBuddy />
        )}
      </ContentDiv>
    </>
  );
}

export default ShopNav;

const ButtonsDiv = styled.div`
  position: absolute;
  display: flex;
  text-align: left;
  width: 14rem;
  height: 1.875rem;
  left: 0px;
  padding: 0 10rem;
  top: 24.25rem;
  line-height: 1.875rem;
`;

const CurrButton = styled.button<{ theme: ColorTypes }>`
  width: 7.5rem;
  height: 1.875rem;
  font-weight: bold;
  color: ${props => props.theme.main};
  margin-right: ${common.fontSize.fs24};
  text-decoration: underline;
  text-underline-offset: 7px;
  text-decoration-thickness: 3px;
`;
const Button = styled.button<{ theme: ColorTypes }>`
  width: 7.5rem;
  height: 1.875rem;
  color: ${props => props.theme.color};
  margin-right: ${common.fontSize.fs24};
  &:hover {
    color: ${props => props.theme.main};
  }
`;

const ContentDiv = styled.div<{ theme: ColorTypes }>`
  position: absolute;
  top: 28rem;
  width: 100vw;
  display: flex;
  color: ${props => props.theme.color};
`;
