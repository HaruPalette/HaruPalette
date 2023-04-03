import styled from '@emotion/styled';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../hooks/reduxHook';
import { selectTheme } from '../../../store/modules/theme';

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

function Section6() {
  const isDark = useAppSelector(selectTheme);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const handleWidth = () => {
    const curWidth =
      window.innerWidth >= 960
        ? window.innerWidth - 320
        : window.innerWidth - 32;
    setWidth(curWidth);
    setHeight((curWidth / 16) * 9);
  };

  useEffect(() => {
    handleWidth();
    window.addEventListener('resize', handleWidth);
    return () => {
      window.removeEventListener('resize', handleWidth);
    };
  }, []);
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
