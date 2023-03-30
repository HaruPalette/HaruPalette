import Image from 'next/image';
import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import useTheme from '../../hooks/useTheme';
// import { selectScript } from '../../store/modules/script';
import ScriptItem from './ScriptItem';
import { SCRIPT } from '../../constants/script';
import { selectProfile } from '../../store/modules/profile';

const Container = styled.div<{ theme: ColorTypes }>`
  width: 30rem;
  height: 40rem;
  overflow-y: scroll;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(3px);
  background: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.main};

  position: relative;
  border-radius: 1.5rem;

  transform: scale(1);

  ::-webkit-scrollbar {
    width: 2rem; /* 스크롤바의 너비 */
  }

  ::-webkit-scrollbar-thumb {
    height: 10%; /* 스크롤바의 길이 */
    background: ${props => props.theme.primary20}; /* 스크롤바의 색상 */
    background-clip: padding-box;
    border: 0.7rem solid transparent;
    border-radius: 2rem;
  }

  @media all and (max-width: 500px) {
    transform: scale(0.65);
    margin-top: -150px;
  }
`;
const ScriptSet = styled.div`
  width: 100%;
  padding: 2rem;
`;
const ChrScript = styled.div<{ theme: ColorTypes }>`
  width: 25rem;
  height: 8rem;
  background: ${props => props.theme.diaryBackground};
  padding: 1rem;
  text-align: left;
  color: ${props => props.theme.main};
  border-radius: 1rem;
`;
const ChrInfo = styled.div<{ theme: ColorTypes }>`
  width: 6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

function ScriptList() {
  const theme = useTheme();
  const chr = useSelector(selectProfile).chrName;
  // const scriptLen = useSelector(selectScript).curScriptIndex;
  const scriptLen = 3;
  return (
    <Container theme={theme}>
      {Array.from({ length: scriptLen }, (v, i) => i).map(item => {
        return (
          <ScriptSet key={item}>
            <ChrScript theme={theme}>
              <ChrInfo theme={theme}>
                <Image
                  src={`assets/img/${chr}/2d.svg`}
                  width={36}
                  height={30}
                  alt="chr"
                />
                <div>{chr}</div>
              </ChrInfo>
              {item === 0 ? SCRIPT[1].script : SCRIPT[2].script}
            </ChrScript>
            <ScriptItem index={item} />
          </ScriptSet>
        );
      })}
    </Container>
  );
}

export default ScriptList;
