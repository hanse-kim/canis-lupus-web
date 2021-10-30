import jwtDecode from 'jwt-decode';

const decodeJwtToken = <T>(token: string) => {
  const decoded = jwtDecode<T>(token);
  return {...decoded, token};
};

export default decodeJwtToken;
