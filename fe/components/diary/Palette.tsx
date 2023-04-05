import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import useTheme from '../../hooks/useTheme';
import { common } from '../../styles/theme';

const Container = styled.div`
  width: 100%;
  //height: 4.75rem;

  @media screen and (max-width: 500px) {
    transform: scale(0.75);
    margin-top: -2rem;
  }
`;

const Bar = styled.div<{ theme: ColorTypes }>`
  width: 100%;
  height: 1.8rem;
  background: linear-gradient(
    to right,
    ${props => props.theme.background},
    ${props => props.theme.primary60}
  );
  border-radius: 0.5rem;
  margin-bottom: 2rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Text = styled.div<{ theme: ColorTypes }>`
  color: ${props => props.theme.color};
  font-size: ${common.fontSize.fs20};

  @media screen and (max-width: 500px) {
    font-size: ${common.fontSize.fs16};
  }
`;

function Palette() {
  const theme = useTheme();
  return (
    <Container>
      <Bar theme={theme} />
      <Content>
        <Image
          src="/assets/img/common/soso.svg"
          width={40}
          height={40}
          alt="soso"
        />
        <Text theme={theme}>행복한 일기라면 색이 더 짙게 나타납니다.</Text>
        <Image
          src="/assets/img/common/smile.svg"
          width={40}
          height={40}
          alt="smile"
        />
      </Content>
    </Container>
  );
}

export default Palette;
