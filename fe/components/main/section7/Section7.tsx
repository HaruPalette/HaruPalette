import styled from '@emotion/styled';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../hooks/reduxHook';
import { selectTheme } from '../../../store/modules/theme';
import JellyList from '../../common/JellyList';
import { useSectionFiveBall } from '../../../hooks/useBall';
import useScreenY from '../../../hooks/useScreenY';

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  & img {
    z-index: 2;
  }
`;

const Background = styled.div<{ windowHeight: number }>`
  position: fixed;
  top: 50%;
  left: 50%;
  display: ${props =>
    props.windowHeight >= 8600 && props.windowHeight < 9250 ? 'flex' : 'none'};

  @media screen and (min-height: 800px) {
    display: ${props =>
      props.windowHeight >= 10100 && props.windowHeight < 10350
        ? 'flex'
        : 'none'};
  }
`;

function Section7() {
  const isDark = useAppSelector(selectTheme);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const ball = useSectionFiveBall();
  const windowHeight = useScreenY();

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
      <Background windowHeight={windowHeight}>
        <JellyList ball={ball} />
      </Background>
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

export default Section7;
