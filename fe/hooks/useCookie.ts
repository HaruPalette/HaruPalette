const useCookie = (cookieString: string) => {
  const cookie = cookieString.split('; ');
  const result: {
    [key: string]: string;
  } = {};

  for (let i = 0; i < cookie.length; i++) {
    const cur = cookie[i].split('=');
    // eslint-disable-next-line prefer-destructuring
    result[cur[0]] = cur[1];
  }
  return result;
};

export default useCookie;
