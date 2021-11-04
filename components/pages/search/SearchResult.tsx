import {
  Grid,
  Heading,
  Stack,
  Image,
  Box,
  HStack,
  ButtonProps,
} from '@chakra-ui/react';
import GroupCard from 'components/common/GroupCard';
import LoadingSpinner from 'components/common/LoadingSpinner';
import PageNavigation from 'components/common/PageNavigation';
import {Button} from 'components/common/_basic';
import useGroupList from 'hooks/api/useGroupList';
import {useRouter} from 'next/dist/client/router';
import React, {useEffect} from 'react';
import {GroupInfo} from 'types/group';

const FilterButton = (props: ButtonProps) => {
  return (
    <Button
      theme='gray'
      paddingX='12px'
      paddingY='6px'
      borderRadius='4px'
      height='fit-content'
      {...props}
    >
      {props.children}
    </Button>
  );
};

const SearchResultHeader = (props: {resultLength: number}) => {
  return (
    <Stack spacing='16px'>
      <Heading fontSize='26px'>{`${props.resultLength}건의 검색 결과`}</Heading>
      <HStack height='fit-content' spacing='12px'>
        <FilterButton>카테고리</FilterButton>
        <FilterButton>필터</FilterButton>
      </HStack>
    </Stack>
  );
};

const SearchResultContainer = (props: {groupList: GroupInfo[]}) => {
  return (
    <Grid
      className='searchResultContainer'
      templateColumns='repeat(2, 1fr)'
      gap={3}
    >
      {props.groupList.map((item, index) => (
        <GroupCard key={index} {...item} />
      ))}
    </Grid>
  );
};

const SearchResultFooter = (props: {
  currentPage: number;
  maxPage: number;
  setPage: (n: number) => void;
}) => {
  return <PageNavigation {...props} />;
};

const NoResult = () => {
  return (
    <Stack
      spacing='12px'
      alignItems='center'
      paddingTop='240px'
      paddingBottom='445px'
    >
      <Image
        src='/images/noResult.svg'
        alt='noResult'
        width='80px'
        height='80px'
      />
      <Box fontWeight='semibold'>검색 결과가 없습니다.</Box>
    </Stack>
  );
};

const SearchResult = () => {
  const router = useRouter();
  const params: any = router.query;
  const {
    fetchGroupList,
    groupCount,
    groupListPerPage,
    setPage,
    maxPage,
    page,
    isLoading,
  } = useGroupList();

  useEffect(() => {
    if (typeof params.keyword !== 'undefined') {
      fetchGroupList({searchBy: 'keyword', value: params.keyword});
    }
  }, [fetchGroupList, params.keyword]);

  if (!params.keyword) {
    return null;
  }

  if (isLoading) {
    return <LoadingSpinner paddingY='80px' />;
  }

  if (groupCount === 0) {
    return (
      <Stack spacing='40px' paddingTop='36px' paddingBottom='80px'>
        <SearchResultHeader resultLength={groupCount} />
        <NoResult />
      </Stack>
    );
  }

  return (
    <Stack spacing='40px' paddingTop='36px' paddingBottom='80px'>
      <SearchResultHeader resultLength={groupCount} />
      <SearchResultContainer groupList={groupListPerPage} />
      <SearchResultFooter
        currentPage={page}
        maxPage={maxPage}
        setPage={setPage}
      />
    </Stack>
  );
};

export default SearchResult;
