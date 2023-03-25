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

export function useDay(date: string) {
  const day = date.split('-');
  const dayNum = new Date(
    Number(day[0]),
    Number(day[1]) - 1,
    Number(day[2]),
  ).getDay();
  if (dayNum === 0) {
    day.push('(일)');
  } else if (dayNum === 1) {
    day.push('(월)');
  } else if (dayNum === 2) {
    day.push('(화)');
  } else if (dayNum === 3) {
    day.push('(수)');
  } else if (dayNum === 4) {
    day.push('(목)');
  } else if (dayNum === 5) {
    day.push('(금)');
  } else if (dayNum === 6) {
    day.push('(토)');
  }

  return day.join('.');
}
