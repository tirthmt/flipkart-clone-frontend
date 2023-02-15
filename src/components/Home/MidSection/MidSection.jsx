import React from "react";
import "./MidSection.scss";
import { Box } from "@mui/material";

import { imageURL } from "../../../constants/data";

const MidSection = () => {
  return (
    <Box className="d-flex midSection">
      {imageURL.map((image, index) => (
        <img key={index} src={image} alt="productImage" />
      ))}
    </Box>
  );
};

export default MidSection;
