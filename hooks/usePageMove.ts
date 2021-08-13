import {useRouter} from 'next/dist/client/router';

const usePageMove = () => {
  const router = useRouter();

  const pageMove = (url: string) => {
    router.push(url);
  };

  const pageMoveWithRedirect = (url: string) => {
    router.push({
      pathname: url,
      query: {redirect: window.location.pathname},
    });
  };

  const pageRedirect = (url: string) => {
    router.replace(url);
  };

  return {
    pageMove,
    pageRedirect,
    pageMoveWithRedirect,
  };
};

export default usePageMove;
