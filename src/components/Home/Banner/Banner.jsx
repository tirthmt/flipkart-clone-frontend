import React from "react";
import "./Banner.scss";
import "react-multi-carousel/lib/styles.css";

import { bannerData } from "../../../constants/data";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Banner = () => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      responsive={responsive}
      infinite={true}
      autoPlaySpeed={1000}
    >
      {bannerData.map((value) => (
        <img
          key={value.id}
          className="bannerImage"
          src={value.url}
          alt={`category${value.id}`}
        />
      ))}
    </Carousel>
  );
};

export default Banner;
