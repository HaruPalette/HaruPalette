import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import { useDate, useNowDate } from '../../hooks/useDate';
import useTheme from '../../hooks/useTheme';
import { common } from '../../styles/theme';
import Horizontal from '../progressbar/Horizontal';

const ChallengeStyles = styled.div`
  width: 100%;
  transform: scale(1);
  margin-bottom: 3rem;

  @media screen and (max-width: 500px) {
    transform: scale(0.75);
    margin-top: -2rem;
  }
`;

const Title = styled.div<{ theme: ColorTypes }>`
  font-size: ${common.fontSize.fs20};
  color: ${props => props.theme.main};
  font-weight: bold;
`;

const CountStyles = styled.div<{ theme: ColorTypes }>`
  font-size: ${common.fontSize.fs20};
  color: ${props => props.theme.main};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 0;
`;

function Challenge() {
  const theme = useTheme();
  const nowDate: number = useNowDate(useDate().year, useDate().month);
  return (
    <>
      <ChallengeStyles>
        <Title theme={theme}>이번 주 도전 과제</Title>
        <Horizontal percent={Math.floor((4 / 7) * 100)} />
        <CountStyles theme={theme}>
          <div>0회</div>
          <div>7회</div>
        </CountStyles>
      </ChallengeStyles>
      <ChallengeStyles>
        <Title theme={theme}>이번 달 도전 과제</Title>
        <Horizontal percent={Math.floor((4 / nowDate) * 100)} />
        <CountStyles theme={theme}>
          <div>0회</div>
          <div>{nowDate}회</div>
        </CountStyles>
      </ChallengeStyles>
    </>
  );
}

export default Challenge;
