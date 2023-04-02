import styled from '@emotion/styled';
import { ColorTypes } from '@emotion/react';
import { SHOP_NAV_LIST } from '../../constants/nav';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { setCompIdx, selectShop } from '../../store/modules/shop';
import useTheme from '../../hooks/useTheme';

const ButtonsDiv = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  height: 1.875rem;
  top: 50px;
  right: 0px;
  margin-bottom: 40px;
  line-height: 1.875rem;
`;

const CurrButton = styled.button<{ theme: ColorTypes }>`
  width: 10.5rem;
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
  width: 10.5rem;
  height: 1.875rem;
  text-align: center;
  font-size: 20px;

  color: ${props => props.theme.color};
  &:hover {
    color: ${props => props.theme.main};
  }
`;

function ShopNav() {
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const compIdx = useAppSelector(selectShop).currCompIdx;

  return (
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
  );
}

export default ShopNav;
