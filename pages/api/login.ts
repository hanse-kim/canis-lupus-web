export const login = () => {
  localStorage.setItem('user-token', 'this is token');
};

export const checkLoggedIn = () => {
  console.log(
      'isLoggedIn: ' + String(localStorage.getItem('user-token') !== null)
  );
  return localStorage.getItem('user-token') !== null;
};
