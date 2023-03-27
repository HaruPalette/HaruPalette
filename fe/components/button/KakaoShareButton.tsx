import { ColorTypes } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import useTheme from '../../hooks/useTheme';
import { common } from '../../styles/theme';

const ShareButton = styled.button<{ theme: ColorTypes }>`
  width: 20rem;
  height: 3.5rem;
  border-radius: 3.5rem;
  font-weight: ${common.fontSize.fs20};
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme.border};
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
`;

const ShareImg = styled(Image)`
  margin-right: 1rem;
`;

function KakaoShareButton(props: {
  setShare: Dispatch<SetStateAction<boolean>>;
}) {
  const { setShare } = props;
  const theme = useTheme();
  return (
<<<<<<< HEAD
    <ShareButton type="button">
      <Image
=======
    <ShareButton type="button" theme={theme} onClick={() => setShare(true)}>
      <ShareImg
>>>>>>> a150853849cff3baf26a3565478f8ee0a211592c
        src="/assets/img/common/share.svg"
        width={40}
        height={40}
        alt="share"
      />
      KAKAO 공유
    </ShareButton>
  );
}

export default KakaoShareButton;
