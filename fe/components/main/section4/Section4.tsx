import styled from '@emotion/styled';
import useScreenY from '../../../hooks/useScreenY';
import SectionCalendar from './SectionCalendar';

const Section = styled.section<{ windowHeight: number }>`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 10rem;

  transition: font-size 0s ease-in-out;

  @media screen and (max-width: 960px) {
  }

  @media screen and (max-width: 500px) {
    padding: 0 1rem;
  }
`;

const SectionText = styled.h1`
  font-size: 5vw;
`;

const CalendarContainer = styled.article`
  width: 50vw;
  display: flex;
  justify-content: center;
  background: #ffdbe6;
  border-radius: 1rem;
  padding: 1rem;
`;

function Section4() {
  const windowHeight = useScreenY();
  return (
    <Section windowHeight={windowHeight}>
      <SectionText>감정 분석 달력</SectionText>
      <CalendarContainer>
        <SectionCalendar />
      </CalendarContainer>
    </Section>
  );
}

export default Section4;
