import usePageMove from 'hooks/usePageMove';
import useRecentSearch from './useRecentSearch';
import useSearchPanel from './useSearchPanel';

const useSearchForm = (keyword: string) => {
  const {addKeyword} = useRecentSearch();
  const {pageMove} = usePageMove();
  const {onClose} = useSearchPanel();

  const search = () => {
    pageMove(`/search?keyword=${keyword}`);
    addKeyword(keyword);
    onClose();
  };

  return {search};
};

export default useSearchForm;
