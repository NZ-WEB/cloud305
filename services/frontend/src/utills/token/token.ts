export const setAccessTokenToLS = (newToken: string) => {
  localStorage.setItem('AccessToken', newToken);
};

export const getAccessTokenFromLS = () => {
  const token = localStorage.getItem('AccessToken');
  return token;
};

export const removeAccessTokenFromSL = () => {
  localStorage.removeItem('AccessToken');
};
