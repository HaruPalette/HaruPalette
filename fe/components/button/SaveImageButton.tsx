import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import useTheme from '../../hooks/useTheme';
import { common } from '../../styles/theme';

const SaveButton = styled.button<{ theme: ColorTypes }>`
  width: 20rem;
  height: 3.5rem;
  border-radius: 3.5rem;
  color: ${props => props.theme.color};
  background: ${props => props.theme.background};
  font-weight: ${common.fontSize.fs20};
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme.border};
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
  margin: 1rem;
`;

const SaveImg = styled(Image)`
  margin-right: 1rem;
`;

function SaveImageButton(props: {
  setSave: Dispatch<SetStateAction<boolean>>;
}) {
  const { setSave } = props;
  const theme = useTheme();
  return (
    <SaveButton type="button" theme={theme} onClick={() => setSave(true)}>
      <SaveImg
        src="/assets/img/common/save.svg"
        width={40}
        height={40}
        alt="share"
      />
      이미지로 저장
    </SaveButton>
  );
}

export default SaveImageButton;
