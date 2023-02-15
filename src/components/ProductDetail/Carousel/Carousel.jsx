import React from "react";
import "./Carousel.scss";
import { Box, Button } from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";

const Carousel = ({ data }) => {
  return (
    <Box className="productDetailCarousel d-flex">
      <Box className="carousel">Carousel</Box>
      <Box className="cartButtons d-flex space-between">
        <Button variant="contained">
          <ShoppingCartIcon />
          Add to cart
        </Button>
        <Button variant="contained">
          <FlashOnIcon />
          Order it
        </Button>
      </Box>
    </Box>
  );
};

export default Carousel;
