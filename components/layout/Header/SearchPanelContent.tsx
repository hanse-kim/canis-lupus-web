import {SmallCloseIcon} from '@chakra-ui/icons';
import {Box, Divider, Flex, HStack, Link, Stack} from '@chakra-ui/layout';
import {Tag, TagProps} from '@chakra-ui/tag';
import Container from 'components/common/Container';
import useRecentSearch from 'hooks/search/useRecentSearch';
import useSearchForm from 'hooks/search/useSearchForm';
import React from 'react';
import {colors} from 'style';

const recommendKeywords = ['운동', '개발', '여행'];

const Keyword = (props: TagProps) => {
  return (
    <Tag
      paddingX='12px'
      paddingY='8px'
      borderRadius='full'
      marginBottom='4px'
      marginRight='8px'
      fontSize='14px'
      fontWeight='normal'
      {...props}
    >
      {props.children}
    </Tag>
  );
};

const RecentKeyword = (props: {keyword: string}) => {
  const {keyword} = props;
  const {removeKeyword} = useRecentSearch();
  const {search} = useSearchForm(keyword);
  return (
    <Keyword
      backgroundColor={colors.white}
      border={`1px solid ${colors.mainGray[0]}`}
      color={colors.black}
    >
      <HStack spacing='4px'>
        <Link onClick={search}>{keyword}</Link>
        <Link
          onClick={() => {
            removeKeyword(keyword);
          }}
        >
          <SmallCloseIcon w='16px' h='16px' />
        </Link>
      </HStack>
    </Keyword>
  );
};

const RecommendKeyword = (props: {keyword: string}) => {
  const {keyword} = props;
  const {search} = useSearchForm(keyword);
  return (
    <Keyword
      backgroundColor={colors.mainBlue[1]}
      border={`1px solid ${colors.mainBlue[1]}`}
      color={colors.white}
    >
      <Link onClick={search}>{keyword}</Link>
    </Keyword>
  );
};

const SearchPanelContainer = (props: {
  label?: string;
  children?: React.ReactNode;
  rightTopButtonLabel?: string;
  onRightTopButtonClick?: () => void;
}) => {
  return (
    <Box
      className='searchPanelContainer'
      paddingTop='24px'
      paddingBottom='24px'
    >
      <Stack spacing='20px'>
        {props.label && (
          <Flex className='containerHeader' justifyContent='space-between'>
            <Box fontWeight='bold'>{props.label}</Box>
            {props.rightTopButtonLabel && (
              <Link
                onClick={props.onRightTopButtonClick}
                fontSize='12px'
                color={colors.minorTextGray}
              >
                {props.rightTopButtonLabel}
              </Link>
            )}
          </Flex>
        )}
        <Box className='containerContent' display='block'>
          {props.children}
        </Box>
      </Stack>
    </Box>
  );
};

const SearchPanelContent = () => {
  const {keywords: recentKeywords, resetKeywords} = useRecentSearch();

  return (
    <Container className='searchPanelContent'>
      <SearchPanelContainer
        label='최근 검색어'
        rightTopButtonLabel='전체 삭제'
        onRightTopButtonClick={resetKeywords}
      >
        {recentKeywords.map((item, index) => (
          <RecentKeyword key={index} keyword={item} />
        ))}
      </SearchPanelContainer>
      <Divider />
      <SearchPanelContainer label='추천 검색어'>
        {recommendKeywords.map((item, index) => (
          <RecommendKeyword key={index} keyword={item} />
        ))}
      </SearchPanelContainer>
    </Container>
  );
};

export default SearchPanelContent;
