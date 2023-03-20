import { selectProfile } from '../store/modules/profile';
import { selectTheme } from '../store/modules/theme';
import {
  gomiDark,
  gomiLight,
  haruDark,
  haruLight,
  toriDark,
  toriLight,
} from '../styles/theme';
import { useAppSelector } from './reduxHook';

function getTheme() {
  // 다크모드 여부
  const isDark = useAppSelector(selectTheme);
  // 선택된 캐릭터 정보
  const chr = useAppSelector(selectProfile);

  if (chr.chrName === 'haru') {
    return isDark ? haruDark : haruLight;
  } else if (chr.chrName === 'tori') {
    return isDark ? toriDark : toriLight;
  } else if (chr.chrName === 'gomi') {
    return isDark ? gomiDark : gomiLight;
  }

  return haruLight;
}

export default getTheme;
