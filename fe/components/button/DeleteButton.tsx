import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import { AxiosError, AxiosResponse } from 'axios';
import Image from 'next/image';
import { useMutation } from 'react-query';
import { DIARIES } from '../../constants/api';
import useTheme from '../../hooks/useTheme';
import { common } from '../../styles/theme';
import { ErrorResponse } from '../../types/commonTypes';
import { usePatchDiaries } from '../../apis/diaries';
import { useDate } from '../../hooks/useDate';
import { useAppDispatch } from '../../hooks/reduxHook';
import { setIsToday } from '../../store/modules/profile';

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

function DeleteButton(props: { diaryId: number; date: string | undefined }) {
  const { diaryId, date } = props;
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const mutation = useMutation<AxiosResponse<any>, AxiosError<ErrorResponse>>(
    [DIARIES, diaryId],
    usePatchDiaries(diaryId),
  );
  const today = useDate();
  const todayData = `${today.year}-${
    today.month < 10 ? `0${today.month}` : today.month
  }-${today.date < 10 ? `0${today.date}` : today.date}`;

  // 버튼 onClick 시 삭제 axios 호출
  const handleDeleteBtn = () => {
    mutation.mutate();
    if (!mutation.isError) window.location.href = '/calendar';
    if (date === todayData) dispatch(setIsToday(false));
  };
  return (
    <DeleteButtonStyles type="button" theme={theme} onClick={handleDeleteBtn}>
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
