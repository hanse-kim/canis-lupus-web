import {Grid} from '@chakra-ui/react';
import GroupCard from 'components/common/GroupCard';
import LabeledContainer from 'components/common/LabeledContainer';
import LoadingSpinner from 'components/common/LoadingSpinner';
import useGroupList from 'hooks/api/useGroupList';

const RecommendGroups = () => {
  const {groupList, isLoading} = useGroupList({limit: 6});

  return (
    <LabeledContainer label='추천모임' viewMoreUrl='/main'>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Grid
          className='groupContainer'
          templateColumns='repeat(3, 1fr)'
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
