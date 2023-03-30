import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { REMIND, USERS } from '../../constants/api';
import UserService from '../../services/UserService';
import { ErrorResponse } from '../../types/commonTypes';
import { RemindResponse, UsersResponse } from '../../types/usersTypes';

export const useGetUsers = () => {
  const queryFunction = () => UserService.getUsers();
  const { isLoading, data, isError, error } = useQuery<
    AxiosResponse<UsersResponse>,
    AxiosError<ErrorResponse>
  >([USERS], queryFunction, {
    keepPreviousData: true,
  });

  const userData = data?.data?.userData;
  const errorMessage = error?.response?.data?.message || '';

  return {
    isLoading,
    userData,
    isError,
    errorMessage,
  };
};

export const useGetRemind = () => {
  const queryFunction = () => UserService.getRemind();
  const { isLoading, data, isError, error } = useQuery<
    AxiosResponse<RemindResponse>,
    AxiosError<ErrorResponse>
  >([REMIND], queryFunction, {
    keepPreviousData: true,
  });

  const diaryId = data?.data?.diaryId;
  const errorMessage = error?.response?.data?.message || '';

  return {
    isLoading,
    diaryId,
    isError,
    errorMessage,
  };
};
