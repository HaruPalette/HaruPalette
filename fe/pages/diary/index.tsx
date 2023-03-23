import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import CreateButton from '../../components/button/CreateButton';
import Header from '../../components/common/Header';
import Calendar from '../../components/diary/Calendar';
import Challenge from '../../components/diary/Challenge';
import Palette from '../../components/diary/Palette';
import { useDate } from '../../hooks/useDate';
import useTheme from '../../hooks/useTheme';
import { common } from '../../styles/theme';

function Diary() {
  const year = useDate().year;
  const month = useDate().month;
  const theme = useTheme();
  return (
    <>
      <Header />
      <DirayStyles theme={theme}>
        <Title theme={theme}>
          {year}년 {month}월
        </Title>
        <Container>
          <Section>
            <Calendar />
            <Palette />
          </Section>
          <Section>
            <Challenge />
            <CreateButton />
          </Section>
        </Container>
      </DirayStyles>
    </>
  );
}

const DirayStyles = styled.div<{ theme: ColorTypes }>`
  width: 100vw;
  height: calc(100vh - 5.5rem);
  margin-top: 5.5rem;
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
`;

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
export default Diary;
