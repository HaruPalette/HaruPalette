export function useDate() {
  const newDate = new Date();
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const date = newDate.getDate();
  const day = newDate.getDay();

  return { year, month, date, day };
}

export function usePrevDate() {
  return new Date(useDate().year, useDate().month - 1, 0).getDate();
}

export function usePrevDay() {
  return new Date(useDate().year, useDate().month - 1, 0).getDay();
}

export function useNowDate() {
  return new Date(useDate().year, useDate().month, 0).getDate();
}

export function useNowDay() {
  return new Date(useDate().year, useDate().month, 0).getDay();
}
