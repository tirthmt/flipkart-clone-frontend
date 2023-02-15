const keys = {
  SESSION: "swatUser",
  TOKEN: "swatToken",
  IS_TOKEN_EXPIRED: "isTokenExpired",
  IS_AUTH: "isAuthenticated",
  USER: "user",
};

export default keys;

export const setSession = (session) =>
  localStorage.setItem(keys.SESSION, JSON.stringify(session));

export const getSession = () => JSON.parse(localStorage.getItem(keys.SESSION));

export const removeSession = () => {
  localStorage.removeItem(keys.SESSION);
  localStorage.removeItem(keys.IS_TOKEN_EXPIRED);
};

export const setToken = (token) =>
  localStorage.setItem(keys.TOKEN, JSON.stringify(token));

export const getToken = () => JSON.parse(localStorage.getItem(keys.TOKEN));

export const removeToken = () => {
  localStorage.removeItem(keys.TOKEN);
  localStorage.removeItem(keys.IS_TOKEN_EXPIRED);
};

export const setExpiredToken = () =>
  localStorage.setItem(keys.IS_TOKEN_EXPIRED, true);

export const getExpiredToken = () =>
  JSON.parse(localStorage.getItem(keys.IS_TOKEN_EXPIRED));

export const setAuth = () => localStorage.setItem(keys.IS_AUTH, true);

export const getAuth = () => JSON.parse(localStorage.getItem(keys.IS_AUTH));

export const removeAuth = () => localStorage.removeItem(keys.IS_AUTH);

export const setUserId = (userId) =>
  localStorage.setItem(keys.USER, JSON.stringify(userId));

export const getUserId = () => JSON.parse(localStorage.getItem(keys.USER));

export const removeUserId = () => localStorage.removeItem(keys.USER);

export const logout = () => {
  localStorage.clear();
  sessionStorage.clear();
};
