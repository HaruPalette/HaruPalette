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
import JellyList from '../../components/common/JellyList';

const DirayPage = styled.div<{ theme: ColorTypes }>`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.background};
`;

const Container = styled.div`
  width: calc(100vw - 320px);
  padding-top: 5.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

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

const Title = styled.div<{ theme: ColorTypes }>`
  font-size: clamp(24px, 5vw, 40px);
  color: ${props => props.theme.main};
  font-weight: bold;
  text-align: center;
  z-index: 1;

  @media all and (max-width: 500px) {
    margin-top: 1rem;
    margin-bottom: 0;
  }
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media all and (max-width: 1450px) {
    justify-content: center;
    align-items: center;
  }
  @media all and (max-width: 1150px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 500px) {
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

  @media screen and (max-width: 1150px) {
    margin-bottom: 5rem;
  }
  @media screen and (max-width: 500px) {
    margin-bottom: 5rem;
    width: 100vw;
  }
`;

function Diary() {
  const nowYear = useDate().year;
  const nowMonth = useDate().month;
  const theme = useTheme();
  const [year, setYear] = useState(nowYear);
  const [month, setMonth] = useState(nowMonth);

  return (
    <DirayPage theme={theme}>
      <Header />
      <JellyList />
      <Container>
        <Title theme={theme}>
          {year}년 {month}월
        </Title>
        <SectionContainer>
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
        </SectionContainer>
      </Container>
    </DirayPage>
  );
}

export default Diary;
