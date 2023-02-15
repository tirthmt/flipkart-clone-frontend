import React from "react";
import "./Slider.scss";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Countdown from "react-countdown";
import { Box, Button, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import Timer from "../../../assets/Images/Timer.svg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slider = ({ allProducts, title, timer }) => {
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Box varient="span">
        {hours} : {minutes} : {seconds} Left
      </Box>
    );
  };

  return (
    <>
      <Box className="carouselParent">
        <Box className="TopMenu fw-600 d-flex align-items-center">
          <p className="dealHeading fw-600 m0">{title}</p>
          {timer && (
            <Box className="d-flex align-items-center">
              <img src={Timer} alt="timer" />
              <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
            </Box>
          )}
          <Button
            varient="contained"
            className="d-flex viewAllButton"
            color="primary"
          >
            View All
          </Button>
        </Box>

        <Divider />

        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
        >
          {allProducts.map((value) => (
            <Link
              to={`product/${value.id}`}
              className="text-decoration-none"
              key={value._id}
            >
              <Box className="singleProduct">
                <img src={value?.url ?? ""} alt="product" />
                <Typography className="title">
                  {value?.title?.shortTitle ?? ""}
                </Typography>
                <Typography className="discount">
                  {value?.discount ?? ""}
                </Typography>
                <Typography className="tagline">
                  {value?.tagline ?? ""}
                </Typography>
              </Box>
            </Link>
          ))}
        </Carousel>
      </Box>
    </>
  );
};

export default Slider;
