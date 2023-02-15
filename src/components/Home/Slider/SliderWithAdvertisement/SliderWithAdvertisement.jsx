import React from "react";
import "./SliderWithAdvertisement.scss";
import { Box } from "@mui/material";

import Slider from "../Slider";

import AdvertisementImage from "../../../../assets/Images/Advertisement.webp";

const SliderWithAdvertisement = ({ allProducts, title, timer }) => {
  return (
    <React.Fragment>
      <Box className="sliderWithAdvertisement d-flex">
        <Box className="leftpart">
          <Slider allProducts={allProducts} title={title} timer={timer} />
        </Box>
        <Box className="rightside">
          <img className="w-100" src={AdvertisementImage} alt="Advertise" />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default SliderWithAdvertisement;
