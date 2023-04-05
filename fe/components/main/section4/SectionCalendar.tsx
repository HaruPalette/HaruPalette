import styled from '@emotion/styled';
import Image from 'next/image';
import { useAppSelector } from '../../../hooks/reduxHook';
import { selectTheme } from '../../../store/modules/theme';
import { selectProfile } from '../../../store/modules/profile';

const ImageContainer = styled.div<{ isDark: boolean }>`
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
  overflow: hidden;
`;

const CalendarContainer = styled(Image)`
  @media screen and (max-width: 500px) {
    width: 300px;
    height: 300px;
  }
`;

function SectionCalendar() {
  const isDark = useAppSelector(selectTheme);
  const chr = useAppSelector(selectProfile);

  return (
    <ImageContainer isDark={isDark}>
      <CalendarContainer
        src={`/assets/img/${chr.chrName}/${chr.chrName}_${
          isDark ? 'dark' : 'light'
        }_calendar.svg`}
        width={500}
        height={500}
        alt="calendar"
      />
    </ImageContainer>
  );
}

export default SectionCalendar;
