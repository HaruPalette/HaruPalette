import styled from '@emotion/styled';

interface ButtonData {
  width: string;
  height: string;

  context: string;
}

function HaruButton(props: { buttonData: ButtonData }) {
  const buttonData = props.buttonData;
  return (
    <CustomButton buttonData={buttonData}>{buttonData.context}</CustomButton>
  );
}

export default HaruButton;

const CustomButton = styled.button<{ buttonData: ButtonData }>`
  width: ${props => props.buttonData.width};
  height: ${props => props.buttonData.height};

  border-radius: 50%;

  font-size: 1em;
`;
