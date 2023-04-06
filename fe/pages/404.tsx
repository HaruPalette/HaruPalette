import styled from '@emotion/styled';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  &::before,
  &::after {
    content: '';
    background: linear-gradient(#3d3270, #1e205b5b);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
  }
  &::before {
    background: linear-gradient(#313167, #28245f5b);
    overflow: hidden;
  }
  &::before {
    height: 130vmax;
    width: 130vmax;
    z-index: -4;
    overflow: hidden;
  }
  &::after {
    height: 120vmax;
    width: 120vmax;
    z-index: -3;
    overflow: hidden;
  }
`;
const Section = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  &::before,
  &::after {
    content: '';
    background: linear-gradient(#332e6f, #1819505b);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
  }
  &::before {
    background: linear-gradient(#2c2967, #18195b5b);
    overflow: hidden;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: 'Varela Round', Sans-serif;
  text-shadow: 0 30px 10px rgba(#000, 0.15);
  &::before {
    height: 60vmax;
    width: 60vmax;
    z-index: -2;
    overflow: hidden;
  }
  &::after {
    height: 40vmax;
    width: 40vmax;
    z-index: -1;
    overflow: hidden;
  }
`;
const Bubble = styled.div`
  background: linear-gradient(#f6ef8d, #d5c10f);
  border-radius: 50%;
  box-shadow: 0 30px 15px rgba(#000, 0.15);
  position: absolute;
  &:before,
  &:after {
    content: '';
    background: linear-gradient(#f5f088, #e3e027);
    border-radius: 50%;
    box-shadow: 0 30px 15px rgba(#000, 0.15);
    position: absolute;
  }
  &:nth-of-type(1) {
    top: 15vh;
    left: 15vw;
    height: 22vmin;
    width: 22vmin;
    &:before {
      width: 13vmin;
      height: 13vmin;
      bottom: -25vh;
      right: -10vmin;
    }
  }
  &:nth-of-type(2) {
    top: 20vh;
    left: 38vw;
    height: 10vmin;
    width: 10vmin;
    &:before {
      width: 5vmin;
      height: 5vmin;
      bottom: -10vh;
      left: -8vmin;
    }
  }
  &:nth-of-type(3) {
    top: 12vh;
    right: 30vw;
    height: 13vmin;
    width: 13vmin;
    &:before {
      width: 3vmin;
      height: 3vmin;
      bottom: -15vh;
      left: -18vmin;
      z-index: 6;
    }
  }
  &:nth-of-type(4) {
    top: 25vh;
    right: 18vw;
    height: 18vmin;
    width: 18vmin;
    &:before {
      width: 7vmin;
      height: 7vmin;
      bottom: -10vmin;
      left: -15vmin;
    }
  }
  &:nth-of-type(5) {
    top: 60vh;
    right: 18vw;
    height: 28vmin;
    width: 28vmin;
    &:before {
      width: 10vmin;
      height: 10vmin;
      bottom: 5vmin;
      left: -25vmin;
    }
  }
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  z-index: 5;
`;
const H1 = styled.h1`
  font-size: 95px;
  margin: 0;
`;
const P = styled.p`
  font-size: 18px;
  margin-top: 0;
`;
const Br = styled.br``;
const Button = styled.button`
  background: linear-gradient(#d4ba51, #bd930a);
  padding: 0 12px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 30px 15px rgba(#000, 0.15);
  outline: none;
  color: #ffffff;
  font: 400 16px/2.5 Nunito, 'Varela Round', Sans-serif;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 2rem;
`;

function NotFound() {
  return (
    <Container>
      <Section>
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble />

        <Main>
          <H1>404</H1>
          <P>Page Not Found</P>
          <Br />
          해당 페이지는 존재하지 않습니다 😱
          <Button
            type="button"
            onClick={() => {
              window.location.href = '/';
            }}
          >
            Go main
          </Button>
        </Main>
      </Section>
    </Container>
  );
}

export default NotFound;
