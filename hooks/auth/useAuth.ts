import {useCallback} from 'react';
import {UserData} from 'types/auth';

export const USER_DATA = 'userData';

const useAuth = () => {
  const login = useCallback((userData: UserData) => {
    localStorage.setItem(USER_DATA, JSON.stringify(userData));
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(USER_DATA);
  }, []);

  const isLoggedIn =
    typeof window !== 'undefined' && localStorage.getItem(USER_DATA) !== null;

  return {login, logout, isLoggedIn: isLoggedIn};
};

export default useAuth;
