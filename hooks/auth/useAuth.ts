import {useCallback, useEffect, useMemo} from 'react';
import {atom, useRecoilState} from 'recoil';
import {UserData} from 'types/auth';

export const USER_DATA = 'userData';
const isLoggedInState = atom({
  key: 'isLoggedInState',
  default: false,
});

const useAuth = () => {
  const login = useCallback((userData: UserData) => {
    localStorage.setItem(USER_DATA, JSON.stringify(userData));
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(USER_DATA);
  }, []);

  const [isLoggedIn, setLoggedIn] = useRecoilState(isLoggedInState);

  useEffect(() => {
    setLoggedIn(
      typeof localStorage !== 'undefined' &&
        localStorage.getItem(USER_DATA) !== null
    );
  }, [setLoggedIn]);

  const userData: UserData = useMemo(() => {
    if (!isLoggedIn) {
      return {};
    }

    const data = localStorage.getItem(USER_DATA);
    return JSON.parse(data!);
  }, [isLoggedIn]);

  return {login, logout, isLoggedIn, userData};
};

export default useAuth;
