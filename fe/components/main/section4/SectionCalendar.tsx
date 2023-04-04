import React from 'react';
import styled from '@emotion/styled';
import Calendar from '../../diary/Calendar';
import { common } from '../../../styles/theme';
import { useAppSelector } from '../../../hooks/reduxHook';
import { selectTheme } from '../../../store/modules/theme';

const CalendarContainer = styled.div<{ isDark: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  max-width: 40rem;
  border-radius: 1rem;
  background: ${props =>
    props.isDark ? common.colors.inheritBlack : common.colors.inheritWhite};
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

const CalendarHead = styled.header`
  display: flex;
  flex-direction: row;
  width: calc(100% - 2rem);
  margin: 2rem;

  justify-content: center;
  font-size: 2rem;
  @media screen and (max-width: 500px) {
    font-size: 1rem;
    justify-content: start;
    width: 100%;
    padding: 0 1rem;
    margin: 0;
  }
`;

const Month = styled.h1`
  text-align: center;
  width: 100%;
  @media screen and (max-width: 500px) {
    text-align: start;
  }
`;

function SectionCalendar() {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const isDark = useAppSelector(selectTheme);

  return (
    <CalendarContainer isDark={isDark}>
      <CalendarHead>
        <Month>{month}월</Month>
      </CalendarHead>
      <Calendar year={year} month={month} />
    </CalendarContainer>
  );
}

export default SectionCalendar;
