import { ColorTypes, css } from '@emotion/react';
import styled from '@emotion/styled';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import useTheme from '../../hooks/useTheme';
import { menuOpenSuccess, selectMenu } from '../../store/modules/menu';

const Hamburger = styled.button<{ isActive: boolean; theme: ColorTypes }>`
  display: none;

  width: 2rem;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;

  @media screen and (max-width: 500px) {
    display: flex;
  }

  span {
    display: block;
    position: absolute;
    height: 0.25rem;
    width: 100%;
    background: ${props => props.theme.primary20};
    border-radius: 1rem;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  span:nth-of-type(1) {
    top: -0.5rem;
  }

  span:nth-of-type(2),
  span:nth-of-type(3) {
    top: 0;
  }

  span:nth-of-type(4) {
    top: 0.5rem;
  }

  ${props =>
    props.isActive &&
    css`
      span:nth-of-type(1) {
        top: -0.5rem;
        width: 0%;
        left: 50%;
      }
      span:nth-of-type(2) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
      }

      span:nth-of-type(3) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }

      span:nth-of-type(4) {
        top: 0.5rem;
        width: 0%;
        left: 50%;
      }
    `}
`;

function HamburgerButton() {
  const active = useAppSelector(selectMenu).isActive;
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const handleOpenHamburger = () => {
    dispatch(menuOpenSuccess());
  };

  return (
    <Hamburger
      type="button"
      onClick={handleOpenHamburger}
      isActive={active}
      theme={theme}
    >
      <span />
      <span />
      <span />
      <span />
    </Hamburger>
  );
}

export default HamburgerButton;
