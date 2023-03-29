import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import useTheme from '../../hooks/useTheme';
import { common } from '../../styles/theme';

const DeleteButtonStyles = styled.button<{ theme: ColorTypes }>`
  width: 15rem;
  height: 3.5rem;
  border-radius: 3.5rem;
  color: ${props => props.theme.color};
  background: ${props => props.theme.background};
  font-weight: ${common.fontSize.fs20};
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme.border};
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
`;

const DeleteImg = styled(Image)`
  margin-right: 2.5rem;
`;

function DeleteButton() {
  const theme = useTheme();
  // 버튼 onClick 시 삭제 axios 호출
  return (
    <DeleteButtonStyles type="button" theme={theme}>
      <DeleteImg
        src="/assets/img/common/delete.svg"
        width={40}
        height={40}
        alt="share"
      />
      일기 삭제
    </DeleteButtonStyles>
  );
}

export default DeleteButton;
