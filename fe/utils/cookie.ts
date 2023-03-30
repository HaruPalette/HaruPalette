import Cookie from 'js-cookie';

// 쿠키에 원하는 데이터 담기
export const setCookie = (name: string, value: string, option?: any) => {
  return Cookie.set(name, value, { ...option });
};

// 쿠키에서 원하는 데이터 꺼내기
export const getCookie = (name: string) => {
  return Cookie.get(name);
};
