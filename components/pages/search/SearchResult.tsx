import {Grid} from '@chakra-ui/react';
import GroupCard from 'components/common/GroupCard';
import LabeledContainer from 'components/common/LabeledContainer';
import LoadingSpinner from 'components/common/LoadingSpinner';
import useGroupList from 'hooks/api/useGroupList';
import {useRouter} from 'next/dist/client/router';

const SearchResult = () => {
  const router = useRouter();
  const params: any = router.query;

  const {groupList, isLoading} = useGroupList({
    limit: 10,
    filter: {searchBy: 'name', keyword: params.keyword},
  });

  if (!params.keyword) {
    return null;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <LabeledContainer label={`${groupList.length}건의 검색 결과`}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Grid
          className='groupContainer'
          templateColumns='repeat(2, 1fr)'
          gap={3}
        >
          {groupList.map((item, index) => (
            <GroupCard key={index} {...item} />
          ))}
        </Grid>
      )}
    </LabeledContainer>
  );
};

export default SearchResult;
