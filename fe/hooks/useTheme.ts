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

function useTheme() {
  const isDark = useAppSelector(selectTheme);
  const profile = useAppSelector(selectProfile);

  if (profile.chrName === 'haru') {
    return isDark ? haruDark : haruLight;
  } else if (profile.chrName === 'tori') {
    return isDark ? toriDark : toriLight;
  } else if (profile.chrName === 'gomi') {
    return isDark ? gomiDark : gomiLight;
  }

  return haruLight;
}

export default useTheme;
