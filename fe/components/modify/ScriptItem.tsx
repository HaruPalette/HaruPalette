import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { ColorTypes } from '@emotion/react';
import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { selectScript, setScript } from '../../store/modules/script';
import useTheme from '../../hooks/useTheme';
import { common } from '../../styles/theme';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { ErrorResponse } from '../../types/commonTypes';
import { CACHE_TIME, SCRIPT, STALE_TIME } from '../../constants/api';
import { useGetDiariesScript } from '../../apis/diaries';

const Container = styled.div<{ theme: ColorTypes }>`
  width: 23rem;
  height: 6rem;
  text-align: left;
  color: ${props => props.theme.color};
`;
const Script = styled.textarea<{ theme: ColorTypes }>`
  all: unset;
  width: 100%;
  height: 100%;
  margin-top: 1rem;
  padding: 1rem;
  background: #f2f2f2;
  border-radius: 1rem;
  overflow-y: scroll;
  color: ${common.colors.dark};

  ::-webkit-scrollbar {
    width: 1.5rem; /* 스크롤바의 너비 */
  }

  ::-webkit-scrollbar-thumb {
    height: 10%; /* 스크롤바의 길이 */
    background: ${props => props.theme.primary20}; /* 스크롤바의 색상 */
    background-clip: padding-box;
    border: 0.5rem solid transparent;
    border-radius: 2rem;
  }
`;

function ScriptItem(props: { index: number }) {
  const { index } = props;
  const [loadData, setLoadData] = useState('');

  const theme = useTheme();
  const dispatch = useAppDispatch();

  const script: string[] = [...useAppSelector(selectScript).nowScript];

  const query = useQuery<
    AxiosResponse<string>,
    AxiosError<ErrorResponse>,
    string
  >([SCRIPT], () => useGetDiariesScript(index), {
    keepPreviousData: true,
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
  });

  const { data } = query;
  if (data !== '504') {
    setLoadData(data || '');
    script.push(data || '');
    dispatch(setScript(script));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!loadData) {
        query.refetch();
        if (data) {
          setLoadData(data || '');
          script.push(data || '');
          dispatch(setScript(script));
          clearInterval(interval);
        }
      } else clearInterval(interval);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleScript = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const eventTarget = e.target;
    setLoadData(eventTarget.value);
    script[index] = eventTarget.value;
    dispatch(setScript(script));
  };
  return (
    <Container theme={theme}>
      {!loadData && (
        <Script
          theme={theme}
          defaultValue={`${index + 1}번째 스크립트 로딩 중 ...`}
        />
      )}
      {loadData && (
        <Script defaultValue={loadData} theme={theme} onChange={handleScript} />
      )}
    </Container>
  );
}

export default ScriptItem;
