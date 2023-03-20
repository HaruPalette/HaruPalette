import { selectProfile } from '../store/modules/profile';
import { selectTheme } from '../store/modules/theme';
import { useAppSelector } from './reduxHook';

function getTheme() {
  // 다크모드 여부
  const isDark = useAppSelector(selectTheme);
  // 선택된 캐릭터 정보
  const chr = useAppSelector(selectProfile);

  return isDark ? chr.chrName + 'Dark' : chr.chrName + 'Light';
}

export default getTheme;
