import {Box, Center, Image, Link, Spinner} from '@chakra-ui/react';
import Banner from 'components/common/Banner';
import useMainBannerList from 'hooks/main/useMainBannerList';
import {BannerInfo} from 'types';

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
      <Center>
        <Spinner />
      </Center>
    );
  }

  return (
    <Banner bannerItemComponent={BannerItem} bannerItemProps={bannerList} />
  );
};

export default MainBanner;
