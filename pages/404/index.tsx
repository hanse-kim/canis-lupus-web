import usePageMove from 'hooks/usePageMove';
import {useEffect} from 'react';

const Custom404 = () => {
  const {pageRedirect} = usePageMove();

  useEffect(() => {
    pageRedirect('/main');
  });

  return null;
};

export default Custom404;
