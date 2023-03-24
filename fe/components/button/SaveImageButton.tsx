import styled from '@emotion/styled';
import Image from 'next/image';

function SaveImageButton() {
  return (
    <SaveButton type="button">
      <Image
        src="assets/img/common/save.svg"
        width={40}
        height={40}
        alt="share"
      />
      이미지로 저장
    </SaveButton>
  );
}

export default SaveImageButton;

const SaveButton = styled.button``;
