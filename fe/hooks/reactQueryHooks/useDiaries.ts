import { useQuery, useMutation } from 'react-query';

import { AxiosError, AxiosResponse } from 'axios';
import { DIARIES } from '../../constants/api';
import DiariesService from '../../services/DiariesService';
import { DiariesResponse, UseGetDiariesResult } from '../../types/diariesTypes';
import { ErrorResponse } from '../../types/commonTypes';

const useGetDiaries = (diaryId: number): UseGetDiariesResult => {
  const queryFunction = () => DiariesService.getDiaries(diaryId);
  const { isLoading, data, isError, error } = useQuery<
    AxiosResponse<DiariesResponse>,
    AxiosError<ErrorResponse>
  >([DIARIES, diaryId], queryFunction, {
    keepPreviousData: true,
  });

  const diaryData = data?.data?.diaryData;
  const errorMessage = error?.response?.data?.message || '';

  return {
    isLoading,
    diaryData,
    isError,
    errorMessage,
  };
};

const usePostDiaries = () => {
  const queryFunction = () => {};
};

const usePatchDiaries = () => {};

export default { useGetDiaries };
