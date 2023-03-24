import styled from '@emotion/styled';
import Image from 'next/image';

function KakaoShareButton() {
  return (
    <ShareButton type="button">
      <Image
        src="assets/img/common/share.svg"
        width={40}
        height={40}
        alt="share"
      />
      KAKAO 공유
    </ShareButton>
  );
}

export default KakaoShareButton;

const ShareButton = styled.button``;
