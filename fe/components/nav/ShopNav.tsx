import styled from '@emotion/styled';
import { ColorTypes } from '@emotion/react';
import { SHOP_NAV_LIST } from '../../constants/nav';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { setCompIdx, selectShop } from '../../store/modules/shop';
import useTheme from '../../hooks/useTheme';
import Challenge from '../shop/Challenge';
import BuyingBuddy from '../shop/BuyingBuddy';
import PointDetail from '../shop/PointDetail';
import { common } from '../../styles/theme';

const ButtonsDiv = styled.div`
  position: absolute;
  display: flex;
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
  font-size: 20px;
  text-align: center;
  color: ${props => props.theme.main};
  text-decoration: underline;
  text-underline-offset: 7px;
  text-decoration-thickness: 3px;
`;
const Button = styled.button<{ theme: ColorTypes }>`
  width: 7.5rem;
  height: 1.875rem;
  text-align: center;
  font-size: 20px;

  color: ${props => props.theme.color};
  &:hover {
    color: ${props => props.theme.main};
  }
`;

const ContentDiv = styled.div<{ theme: ColorTypes }>`
  position: absolute;
  top: 28rem;
  display: flex;
  color: ${props => props.theme.color};
`;

function ShopNav() {
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const compIdx = useAppSelector(selectShop).currCompIdx;

  return (
    <>
      <ButtonsDiv>
        {SHOP_NAV_LIST.map((item, index) =>
          index === compIdx ? (
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
        {(() => {
          if (compIdx === 1) return <PointDetail />;
          if (compIdx === 2) return <BuyingBuddy />;
          return <Challenge />;
        })()}
      </ContentDiv>
    </>
  );
}

export default ShopNav;
