import React from "react";
import { Box } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const SLICK_SLIDE_DOTS_HEIGHT = 28;

const Banner = (props: {
  bannerItemComponent?: (props: any) => JSX.Element;
  bannerItemProps?: any[];
}) => {
  return (
    <Box
      className="bannerWrapper"
      marginBottom={`${SLICK_SLIDE_DOTS_HEIGHT}px`}
    >
      <Slider {...settings}>
        {props.bannerItemProps?.map((bannerItemProp, index) => {
          return (
            props.bannerItemComponent && (
              <props.bannerItemComponent key={index} {...bannerItemProp} />
            )
          );
        })}
      </Slider>
    </Box>
  );
};

export default Banner;
