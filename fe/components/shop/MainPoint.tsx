import Image from 'next/image';
import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import useTheme from '../../hooks/useTheme';

const Container = styled.div`
  position: absolute;
  width: 200px;
  height: 50px;
  top: 330px;
  background: #ffffff;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 35px;
  border: 1px solid #e5e5e5;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const PointImg = styled(Image)`
  position: absolute;
  width: 80px;
  height: 30px;
  left: 5px;
`;
const Point = styled.div<{ theme: ColorTypes }>`
  position: absolute;
  width: 100px;
  height: 40px;
  right: 10px;
  color: ${props => props.theme.main};
  font-size: 28px;
  line-height: 45px;
  font-weight: 600;
`;
const PointDesc = styled.div`
  position: absolute;
  width: 10px;
  height: 40px;
  right: 40px;
  color: #000000;
  font-size: 28px;
  line-height: 45px;
  font-weight: 600;
`;

function MainPoint() {
  const PointImgSrc = `assets/img/palette.svg`;
  const theme = useTheme();

  return (
    <Container>
      <PointImg src={PointImgSrc} width={20} height={20} alt="pointImg" />
      <Point theme={theme}>700</Point>
      <PointDesc>P</PointDesc>
    </Container>
  );
}

export default MainPoint;
