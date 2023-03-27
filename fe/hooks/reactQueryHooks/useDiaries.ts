import { useQuery, useMutation, useQueryClient } from 'react-query';

import { AxiosError, AxiosResponse } from 'axios';
import { DIARIES, IMAGE } from '../../constants/api';
import DiariesService from '../../services/DiariesService';
import {
  DiariesResponse,
  ImageResponse,
  ScriptResponse,
} from '../../types/diariesTypes';
import { ErrorResponse } from '../../types/commonTypes';

/** 일기 상세 조회 */
const useGetDiaries = (diaryId: number) => {
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

/** 일기 작성 */
const usePostDiaries = (diaryData: object) => {
  const queryClient = useQueryClient();

  const mutation = useMutation([]);
};

/** 일기 삭제 */
const usePatchDiaries = () => {};

/** 일기 이미지 조회 */
const useGetImage = () => {
  const queryFunction = () => DiariesService.getImage();
  const { isLoading, data, isError, error } = useQuery<
    AxiosResponse<ImageResponse>,
    AxiosError<ErrorResponse>
  >([IMAGE], queryFunction, {
    keepPreviousData: true,
  });

  const imageDate = data?.data?.imageData;
  const errorMessage = error?.response?.data?.message || '';

  return {
    isLoading,
    imageDate,
    isError,
    errorMessage,
  };
};

/** 일기 수정 조회 (order: 스크립트 순서) */
const useGetScript = (order: number) => {
  const queryFunction = () => DiariesService.getScript(order);
  const { isLoading, data, isError, error } = useQuery<
    AxiosResponse<ScriptResponse>,
    AxiosError<ErrorResponse>
  >([DIARIES, order], queryFunction, {
    keepPreviousData: true,
  });

  const scriptData = data?.data?.scriptData;
  const errorMessage = error?.response?.data?.message || '';

  return {
    isLoading,
    scriptData,
    isError,
    errorMessage,
  };
};

export default {
  useGetDiaries,
  usePostDiaries,
  usePatchDiaries,
  useGetImage,
  useGetScript,
};
