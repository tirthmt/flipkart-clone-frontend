import React from "react";
import "./Content.scss";
import { Box, Typography } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

import AvailableOffers from "./AvailableOffers";

const Content = ({ data }) => {
  console.log(data);
  return (
    <Box className="productDetailContent">
      <Box className="content">
        <h2 className="m0 mb10">{data?.title?.longTitle ?? ""}</h2>

        <Box className="d-flex align-items-center">
          <h3 className="m0 mb10 fw-500">${data?.price?.cost ?? ""}</h3>
          <h4 className="m0 mb10 originalPrice fw-500">
            <strike>${data?.price?.mrp ?? ""}</strike>
          </h4>
        </Box>

        <h3 className="m0 mb10 fw-500">{data?.price?.discount} off</h3>

        <h3 className="mb10">Available Offers</h3>
        <Box>
          <AvailableOffers title="Get extra 20% off upto $50 on 1 item(s)" />
          <AvailableOffers title="Get extra 13% off (price inclusive of discount)" />
          <AvailableOffers title="Sign up for Flipkart Pay later and get Flipkart gift card worth $100" />
          <AvailableOffers title="5% Cashback on Flipkart Axis Bank Card" />
          <AvailableOffers title="No Cost EMI on Bajaj Finserv EMI Card on cart value above $2999" />

          {/* <Typography className="d-flex mb-5">
            <LocalOfferIcon className="mr-5" />
            Get extra 20% off upto $50 on 1 item(s)
            <span className="tcLink c-pointer fw-600 ml-5">T&C</span>
          </Typography>
          <Typography className="d-flex mb-5">
            <LocalOfferIcon className="mr-5" />
            Get extra 13% off (price inclusive of discount)
            <span className="tcLink c-pointer fw-600"> T&C</span>
          </Typography>
          <Typography className="d-flex mb-5">
            <LocalOfferIcon className="mr-5" />
            Sign up for Flipkart Pay later and get Flipkart gift card worth $100
            <span className="tcLink c-pointer fw-600"> Know more</span>
          </Typography>
          <Typography className="d-flex mb-5">
            <LocalOfferIcon className="mr-5" />
            5% Cashback on Flipkart Axis Bank Card
            <span className="tcLink c-pointer fw-600"> T&C</span>
          </Typography>
          <Typography className="d-flex mb-5">
            <LocalOfferIcon className="mr-5" />
            No Cost EMI on Bajaj Finserv EMI Card on cart value above $2999
            <span className="tcLink c-pointer fw-600"> T&C</span>
          </Typography> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Content;
