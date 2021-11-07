import {useCallback, useEffect, useMemo} from 'react';
import {atom, useRecoilState} from 'recoil';
import {UserData} from 'types/auth';

export const USER_DATA = 'userData';
const isLoggedInState = atom({
  key: 'isLoggedInState',
  default:
    typeof localStorage !== 'undefined' &&
    localStorage.getItem(USER_DATA) !== null,
});

const useAuth = () => {
  const [isLoggedIn, setLoggedIn] = useRecoilState(isLoggedInState);

  const login = useCallback(
    (userData: UserData) => {
      localStorage.setItem(USER_DATA, JSON.stringify(userData));
      setLoggedIn(true);
    },
    [setLoggedIn]
  );

  const logout = useCallback(() => {
    localStorage.removeItem(USER_DATA);
    setLoggedIn(false);
  }, [setLoggedIn]);

  useEffect(() => {
    setLoggedIn(localStorage.getItem(USER_DATA) !== null);
  }, [setLoggedIn]);

  const userData: UserData = useMemo(() => {
    if (!isLoggedIn) {
      return {};
    }

    const data = localStorage.getItem(USER_DATA);
    return JSON.parse(data!);
  }, [isLoggedIn]);

  const updateName = (name: string) => {
    localStorage.setItem(
      USER_DATA,
      JSON.stringify({
        ...userData,
        name,
      })
    );
  };

  return {login, logout, isLoggedIn, userData, updateName};
};

export default useAuth;
