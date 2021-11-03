import PageWrapper from 'components/common/PageWrapper';
import Layout from 'components/layout/Layout';
import SearchResult from 'components/pages/search/SearchResult';

const Search = () => {
  return (
    <Layout>
      <PageWrapper>
        <SearchResult />
      </PageWrapper>
    </Layout>
  );
};

export default Search;
