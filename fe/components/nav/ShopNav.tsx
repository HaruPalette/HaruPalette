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
  text-align: right;
  width: 20.25rem;
  height: 1.875rem;
  left: 0px;
  padding: 0 10rem;
  top: 27.06rem;
  line-height: 1.875rem;
`;

const CurrButton = styled.button<{ theme: ColorTypes }>`
  width: 7.5rem;
  height: 1.875rem;
  font-weight: bold;
  /* color: #8e6cd4; */
  color: ${props => props.theme.main};
  margin-left: ${common.fontSize.fs24};
  text-decoration: underline;
  text-underline-offset: 7px;
  /* text-decoration-style: */
  text-decoration-thickness: 3px;
`;
const Button = styled.button<{ theme: ColorTypes }>`
  width: 7.5rem;
  height: 1.875rem;
  color: ${props => props.theme.color};
  margin-left: ${common.fontSize.fs24};
  &:hover {
    color: ${props => props.theme.main};
  }
`;

const ContentDiv = styled.div<{ theme: ColorTypes }>`
  position: absolute;
  top: 500px;
  padding: 0 160px;
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
