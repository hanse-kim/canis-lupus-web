import React from 'react';
import {Box} from '@chakra-ui/react';
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
};

const SLICK_SLIDE_DOTS_HEIGHT = 28;

const Banner = (props: {
  width?: string;
  bannerItemComponent?: (props: any) => JSX.Element;
  bannerItemProps?: any[];
  sliderProps?: any;
}) => {
  let sliderSettings = Object.assign({}, settings);
  if (props.sliderProps) {
    sliderSettings = Object.assign(sliderSettings, props.sliderProps);
  }

  return (
    <Box
      className="bannerWrapper"
      marginBottom={`${SLICK_SLIDE_DOTS_HEIGHT}px`}
      display="flex"
      justifyContent="center"
    >
      <Box
        className="bannerContainer"
        width={props.width ? props.width : '100%'}
      >
        <Slider {...sliderSettings}>
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
