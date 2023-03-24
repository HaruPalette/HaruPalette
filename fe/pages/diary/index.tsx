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
import { ballDate } from '../../constants/ball';

function Diary() {
  const nowYear = useDate().year;
  const nowMonth = useDate().month;
  const theme = useTheme();
  const [year, setYear] = useState(nowYear);
  const [month, setMonth] = useState(nowMonth);

  return (
    <>
      {ballDate.map(item => {
        return <Jelly ballData={item} />;
      })}
      <Header />
      <DirayPage theme={theme}>
        <Title theme={theme}>
          {year}년 {month}월
        </Title>
        <Select
          setYear={setYear}
          year={year}
          setMonth={setMonth}
          month={month}
        />
        <Container>
          <Section>
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
  width: 100vw;
  height: calc(100vh - 5.5rem);
  padding-top: 5.5rem;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.background};
`;

const Title = styled.div<{ theme: ColorTypes }>`
  font-size: ${common.fontSize.fs40};
  color: ${props => props.theme.main};
  font-weight: bold;
  text-align: center;
  margin: ${common.fontSize.fs24};
  z-index: 9;

  @media all and (max-width: 480px) {
    font-size: 1.5rem;
    margin-left: 12rem;
  }
`;

export default Diary;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 10rem;
  transform: scale(1);
  justify-content: space-between;

  @media all and (max-width: 1450px) {
    margin: auto;
    justify-content: center;
    align-items: center;
  }
  @media all and (max-width: 1150px) {
    margin: auto;
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
`;
