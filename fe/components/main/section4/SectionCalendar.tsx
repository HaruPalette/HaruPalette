import styled from '@emotion/styled';
import Image from 'next/image';
import { useAppSelector } from '../../../hooks/reduxHook';
import { selectTheme } from '../../../store/modules/theme';
import { selectProfile } from '../../../store/modules/profile';

const CalendarContainer = styled(Image)<{ isDark: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem
    ${props =>
      props.isDark ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.25)'};

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

function SectionCalendar() {
  const isDark = useAppSelector(selectTheme);
  const chr = useAppSelector(selectProfile);

  return (
    <CalendarContainer
      isDark={isDark}
      src={`/assets/img/${chr.chrName}/${chr.chrName}_${
        isDark ? 'dark' : 'light'
      }_calendar.svg`}
      width={500}
      height={500}
      alt="calendar"
    />
  );
}

export default SectionCalendar;
