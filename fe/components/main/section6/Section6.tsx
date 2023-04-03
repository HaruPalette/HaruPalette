import styled from '@emotion/styled';
import Image from 'next/image';
import { useAppSelector } from '../../../hooks/reduxHook';
import { selectTheme } from '../../../store/modules/theme';

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  transition: font-size 0s ease-in-out;

  @media screen and (max-width: 960px) {
  }

  @media screen and (max-width: 500px) {
  }
`;

function Section6() {
  const isDark = useAppSelector(selectTheme);
  const width =
    window.innerWidth > 960 ? window.innerWidth - 320 : window.innerWidth - 32;
  const height = (width / 16) * 9;
  return (
    <Section>
      <Image
        src={`/assets/img/common/${isDark ? 'dark' : 'light'}/team_member_${
          isDark ? 'dark' : 'light'
        }.svg`}
        width={width}
        height={height}
        alt="team member image"
      />
    </Section>
  );
}

export default Section6;
