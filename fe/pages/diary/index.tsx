import { useState } from 'react';
import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import CreateButton from '../../components/button/CreateButton';
import Header from '../../components/common/Header';
import Select from '../../components/common/Select';
import Calendar from '../../components/diary/Calendar';
import Challenge from '../../components/diary/Challenge';
import Palette from '../../components/diary/Palette';
import { useDate } from '../../hooks/useDate';
import useTheme from '../../hooks/useTheme';
import { common } from '../../styles/theme';
import Jelly from '../../components/animation/Jelly';
import { useBall } from '../../hooks/useBall';

function Diary() {
  const nowYear = useDate().year;
  const nowMonth = useDate().month;
  const theme = useTheme();
  const [year, setYear] = useState(nowYear);
  const [month, setMonth] = useState(nowMonth);

  return (
    <>
      <Header />
      <JellyList>
        {useBall().map(item => {
          return <Jelly ballData={item} />;
        })}
      </JellyList>
      <DirayPage theme={theme}>
        <Title theme={theme}>
          {year}년 {month}월
        </Title>
        <Container>
          <Section>
            <Select
              setYear={setYear}
              year={year}
              setMonth={setMonth}
              month={month}
            />
            <Calendar year={year} month={month} />
            <Palette />
          </Section>
          <Section>
            <Challenge />
            <CreateButton />
          </Section>
        </Container>
      </DirayPage>
    </>
  );
}

const DirayPage = styled.div<{ theme: ColorTypes }>`
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.background};
`;

const JellyList = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.div<{ theme: ColorTypes }>`
  font-size: clamp(24px, 5vw, 40px);
  color: ${props => props.theme.main};
  font-weight: bold;
  text-align: center;
  margin: ${common.fontSize.fs24};
  z-index: 1;

  @media all and (max-width: 500px) {
    margin-top: 1rem;
    margin-bottom: 0;
  }
`;

export default Diary;

const Container = styled.div`
  width: calc(100vw - 320px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media all and (max-width: 1450px) {
    margin: 0;
    width: calc(100vw - 32px);
    justify-content: space-between;
    align-items: center;
  }
  @media all and (max-width: 1150px) {
    margin: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 500px) {
    margin: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Section = styled.div`
  width: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  @media screen and (max-width: 500px) {
    margin-bottom: 5rem;
  }
`;
