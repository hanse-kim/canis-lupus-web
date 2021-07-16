import React from "react";
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

const Banner = (props: {
  bannerItemComponent?: (props: any) => JSX.Element;
  bannerItemProps?: any[];
}) => {
  return (
    <Slider {...settings}>
      {props.bannerItemProps?.map((bannerItemProp, index) => {
        return (
          props.bannerItemComponent &&
            <props.bannerItemComponent key={index} {...bannerItemProp} />
        );
      })}
    </Slider>
  );
};

export default Banner;
