export function useDate() {
  const newDate = new Date();
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const date = newDate.getDate();
  const day = newDate.getDay();

  return { year, month, date, day };
}

export function usePrevDate(year: number, month: number) {
  return month === 1
    ? new Date(year - 1, 12, 0).getDate()
    : new Date(year, month - 1, 0).getDate();
}

export function usePrevDay(year: number, month: number) {
  return month === 1
    ? new Date(year - 1, 12, 0).getDay()
    : new Date(year, month - 1, 0).getDay();
}

export function useNowDate(year: number, month: number) {
  return new Date(year, month, 0).getDate();
}

export function useNowDay(year: number, month: number) {
  return new Date(year, month, 0).getDay();
}
