import {
  gomiDark,
  gomiLight,
  haruDark,
  haruLight,
  toriDark,
  toriLight,
} from '../styles/theme';
import useTheme from './useTheme';

function useImage() {
  const theme = useTheme();
  if (theme === haruDark)
    return 'https://haru-palette.s3.ap-northeast-2.amazonaws.com/default/haru_dark.svg';
  if (theme === haruLight)
    return 'https://haru-palette.s3.ap-northeast-2.amazonaws.com/default/haru_light.svg';
  if (theme === toriDark)
    return 'https://haru-palette.s3.ap-northeast-2.amazonaws.com/default/tori_dark.svg';
  if (theme === toriLight)
    return 'https://haru-palette.s3.ap-northeast-2.amazonaws.com/default/tori_light.svg';
  if (theme === gomiDark)
    return 'https://haru-palette.s3.ap-northeast-2.amazonaws.com/default/gomi_dark.svg';
  if (theme === gomiLight)
    return 'https://haru-palette.s3.ap-northeast-2.amazonaws.com/default/gomi_light.svg';

  return 'https://haru-palette.s3.ap-northeast-2.amazonaws.com/default/haru_light.svg';
}

export default useImage;
