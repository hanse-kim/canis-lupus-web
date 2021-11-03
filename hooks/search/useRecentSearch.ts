import {useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {recentSearchState} from 'states';

const RECENT_SEARCH = 'recentSearch';
const maxCount = 20;

const useRecentSearch = () => {
  const [keywords, setKeywords] = useRecoilState(recentSearchState);

  const addKeyword = (keyword: string) => {
    if (keywords.length >= maxCount) {
      const sliceStart = keywords.length - (maxCount - 1);
      setKeywords(keywords.slice(sliceStart).concat(keyword));
    } else {
      setKeywords(keywords.concat(keyword));
    }
  };

  const removeKeyword = (keyword: string) => {
    setKeywords(keywords.filter((value) => value !== keyword));
  };

  const resetKeywords = () => {
    setKeywords([]);
  };

  useEffect(() => {
    if (
      typeof localStorage !== 'undefined' &&
      localStorage.getItem(RECENT_SEARCH)
    ) {
      const data = localStorage.getItem(RECENT_SEARCH)!;
      setKeywords(Object.values<string>(JSON.parse(data)));
    } else {
      setKeywords([]);
    }
  }, [setKeywords]);

  useEffect(() => {
    if (keywords.length) {
      localStorage.setItem(RECENT_SEARCH, JSON.stringify(keywords));
    }
  }, [keywords]);

  return {
    keywords,
    addKeyword,
    removeKeyword,
    resetKeywords,
  };
};

export default useRecentSearch;
