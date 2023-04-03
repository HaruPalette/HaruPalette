import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import axios, { AxiosError, AxiosResponse } from 'axios';
import Image from 'next/image';
import { useMutation } from 'react-query';
import { BASE_URL, DIARIES } from '../../constants/api';
import useTheme from '../../hooks/useTheme';
import { common } from '../../styles/theme';
import { ErrorResponse } from '../../types/commonTypes';
import { getCookie } from '../../utils/cookie';

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

function DeleteButton(props: { diaryId: number }) {
  const { diaryId } = props;
  const theme = useTheme();

  //   요청 url
  const queryKey = `${BASE_URL}${DIARIES}/${String(diaryId)}`;
  //   axios 요청
  const queryFn = axios
    .patch(
      queryKey,
      {},
      {
        headers: {
          Authorization: `${getCookie('Authorization')}`,
        },
      },
    )
    .then(res => res.data);

  // 버튼 onClick 시 삭제 axios 호출
  const handleDeleteBtn = () => {
    const { isError } = useMutation<
      AxiosResponse<any>,
      AxiosError<ErrorResponse>
    >([DIARIES, diaryId], () => queryFn);
    if (!isError) window.location.href = '/calendar';
  };
  return (
    <DeleteButtonStyles type="button" theme={theme}>
      <DeleteImg
        src="/assets/img/common/delete.svg"
        width={40}
        height={40}
        alt="share"
        onClick={() => handleDeleteBtn}
      />
      일기 삭제
    </DeleteButtonStyles>
  );
}

export default DeleteButton;
