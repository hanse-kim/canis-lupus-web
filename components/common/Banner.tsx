import React from 'react';
import {Box} from '@chakra-ui/react';
import {LayoutProps} from '@chakra-ui/styled-system';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  variableWidth: false,
  autoplaySpeed: 3000,
};

const Banner = (props: {
  width?: LayoutProps['width'];
  height?: LayoutProps['height'];
  bannerItemComponent?: (props: any) => JSX.Element;
  bannerItemProps?: any[];
  sliderProps?: any;
  autoplay?: boolean;
}) => {
  let sliderSettings = Object.assign({}, settings);
  if (props.sliderProps) {
    sliderSettings = Object.assign(sliderSettings, props.sliderProps);
  }

  return (
    <Box
      className='bannerWrapper'
      display='flex'
      justifyContent='center'
    >
      <Box
        className='bannerContainer'
        width={props.width ? props.width : '100%'}
        height={props.height}
      >
        <Slider {...sliderSettings} autoplay={props.autoplay}>
          {props.bannerItemProps?.map((bannerItemProp, index) => {
            return (
              props.bannerItemComponent && (
                <props.bannerItemComponent key={index} {...bannerItemProp} />
              )
            );
          })}
        </Slider>
      </Box>
    </Box>
  );
};

export default Banner;
