import {Box, Image, Link, SlideFade, Center} from '@chakra-ui/react';
import Banner from 'components/common/Banner';
import LoadingSpinner from 'components/common/LoadingSpinner';
import useMainBannerList from 'hooks/api/useMainBannerList';
import {BannerInfo} from 'types/domain';

const BannerItem = (props: BannerInfo) => {
  return (
    <Box>
      <Link href={props.url}>
        <Image src={props.img_url} alt='banner' />
      </Link>
    </Box>
  );
};

const MainBanner = () => {
  const {isLoading, bannerList} = useMainBannerList();

  if (isLoading) {
    return (
      <Center height='460px' magin='0' padding='0'>
        <LoadingSpinner />
      </Center>
    );
  }

  return (
    <SlideFade in={!isLoading}>
      <Banner
        height='460px'
        bannerItemComponent={BannerItem}
        bannerItemProps={bannerList}
        autoplay
      />
    </SlideFade>
  );
};

export default MainBanner;
