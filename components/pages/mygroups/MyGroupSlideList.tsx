import {Box, Image, Link} from '@chakra-ui/react';
import Banner from 'components/common/Banner';
import {ProductProps} from 'types/props';

const GroupIcon = (props: ProductProps) => {
  return (
    <Box minWidth="100px">
      <Link href={props.url}>
        <Image
          src={props.imageUrl}
          fallbackSrc="https://via.placeholder.com/100"
          alt="group image"
          objectFit="cover"
          boxSize="80px"
          borderRadius="20px"
          margin="auto"
        />
        <Box
          width="80px"
          fontSize="sm"
          isTruncated
          textAlign="center"
          margin="auto"
        >
          {props.title}
        </Box>
      </Link>
    </Box>
  );
};

const MyGroupSlideList = (props: { myGroupList: ProductProps[] }) => {
  const groupCount = props.myGroupList.length;
  const toShowCount = groupCount >= 6 ? 6 : groupCount;
  return (
    <Banner
      width="600px"
      bannerItemComponent={GroupIcon}
      bannerItemProps={props.myGroupList}
      sliderProps={{
        slidesToShow: toShowCount,
        slidesToScroll: toShowCount,
        variableWidth: true,
      }}
    />
  );
};

export default MyGroupSlideList;
