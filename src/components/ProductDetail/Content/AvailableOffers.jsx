import React from "react";
import "./Content.scss";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Typography } from "@mui/material";

const AvailableOffers = ({ title }) => {
  return (
    <Typography className="d-flex mb-5">
      <LocalOfferIcon className="mr-5" />
      {title}
      <span className="tcLink c-pointer fw-600 ml-5">T&C</span>
    </Typography>
  );
};

export default AvailableOffers;
