import {Grid} from '@chakra-ui/react';
import GroupCard from 'components/common/GroupCard';
import LabeledContainer from 'components/common/LabeledContainer';
import LoadingSpinner from 'components/common/LoadingSpinner';
import useGroupList from 'hooks/api/useGroupList';
import {useEffect} from 'react';

const RecommendGroups = () => {
  const {fetchGroupList, groupList, isLoading} = useGroupList();

  useEffect(() => {
    fetchGroupList({searchBy: 'all', options: {limit: 6}});
  }, [fetchGroupList]);

  return (
    <LabeledContainer label='추천모임' viewMoreUrl='/main'>
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

export default RecommendGroups;
