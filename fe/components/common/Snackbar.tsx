import styled from '@emotion/styled';
import { ColorTypes } from '@emotion/react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import {
  closeSnackBarSuccess,
  selectSnackbar,
} from '../../store/modules/snackbar';
import useTheme from '../../hooks/useTheme';
import { selectTheme } from '../../store/modules/theme';

const SnackbarContainer = styled.div<{
  isActive: boolean;
  theme: ColorTypes;
  isDark: boolean;
}>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: 20px;
  left: ${props => (props.isActive ? '10rem' : '-100%')};
  transition: left 0.3s ease-in-out;
  opacity: ${props => (props.isActive ? 1 : 0)};
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.sub};
  border-radius: 5px;
  box-shadow: 2px 4px 10px 0 rgba(0, 0, 0, 0.25);
  z-index: 10000;

  @media screen and (max-width: 960px) {
    left: ${props => (props.isActive ? '25%' : '-100%')};
  }
  @media screen and (max-width: 500px) {
    left: ${props => (props.isActive ? '50%' : '-100%')};
  }
`;

function Snackbar() {
  const theme = useTheme();
  const isDark = useAppSelector(selectTheme);
  const { message, isActive } = useAppSelector(selectSnackbar);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        dispatch(closeSnackBarSuccess());
      }, 1000);
    }
  }, [isActive]);

  return (
    <SnackbarContainer isActive={isActive} theme={theme} isDark={isDark}>
      <div>{message}</div>
    </SnackbarContainer>
  );
}

export default Snackbar;
