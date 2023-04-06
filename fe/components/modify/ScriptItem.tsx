import { useEffect } from 'react';
import styled from '@emotion/styled';
import { ColorTypes } from '@emotion/react';
import axios from 'axios';
import { selectScript, setScript } from '../../store/modules/script';
import useTheme from '../../hooks/useTheme';
import { common } from '../../styles/theme';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { BASE_URL, SCRIPT } from '../../constants/api';
import { getCookie } from '../../utils/cookie';

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

function ScriptItem(props: { order: number }) {
  const { order } = props;

  const theme = useTheme();
  const dispatch = useAppDispatch();

  const script = useAppSelector(selectScript).nowScript;

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get(BASE_URL + SCRIPT, {
          headers: {
            Authorization: `${getCookie('Authorization')}`,
          },
          params: {
            order,
          },
        })
        .then(res => {
          if (res.data !== 504) {
            dispatch(setScript({ index: order, contents: res.data }));
            clearInterval(interval);
          }
        });
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleScript = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const eventTarget = e.target;
    if (eventTarget.value === '') {
      dispatch(setScript({ index: order, contents: '텍스트를 입력해주세요.' }));
    } else dispatch(setScript({ index: order, contents: eventTarget.value }));
  };
  return (
    <Container theme={theme}>
      {!script[order] && (
        <Script
          theme={theme}
          defaultValue={`${order + 1}번째 스크립트 로딩 중 ...`}
          readOnly
        />
      )}
      {script[order] && (
        <Script
          defaultValue={script[order]}
          theme={theme}
          onChange={handleScript}
        />
      )}
    </Container>
  );
}

export default ScriptItem;
