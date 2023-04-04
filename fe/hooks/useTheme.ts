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

  if (profile.chrName === 'haru' && isDark) {
    return haruDark;
  }
  if (profile.chrName === 'haru' && !isDark) {
    return haruLight;
  }
  if (profile.chrName === 'tori' && isDark) {
    return toriDark;
  }
  if (profile.chrName === 'tori' && !isDark) {
    return toriLight;
  }
  if (profile.chrName === 'gomi' && isDark) {
    return gomiDark;
  }
  if (profile.chrName === 'gomi' && !isDark) {
    return gomiLight;
  }

  return haruLight;
}

export function prevTheme(ename: string | undefined) {
  const isDark = useAppSelector(selectTheme);
  if (ename === 'haru' && isDark) {
    return haruDark;
  }
  if (ename === 'haru' && !isDark) {
    return haruLight;
  }
  if (ename === 'tori' && isDark) {
    return toriDark;
  }
  if (ename === 'tori' && !isDark) {
    return toriLight;
  }
  if (ename === 'gomi' && isDark) {
    return gomiDark;
  }
  if (ename === 'gomi' && !isDark) {
    return gomiLight;
  }

  return haruLight;
}

export default useTheme;
