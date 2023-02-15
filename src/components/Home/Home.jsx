import React, { useEffect } from "react";
import "./Home.scss";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import ProductMenuBar from "./ProductMenuBar/ProductMenuBar";
import Banner from "./Banner/Banner";
import Slider from "./Slider/Slider";
import SliderWithAdvertisement from "./Slider/SliderWithAdvertisement/SliderWithAdvertisement";
import MidSection from "./MidSection/MidSection";

// Redux actions
import { getAllProducts } from "../../redux/actions/productActions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  // Using UseSelector to get state from Store
  const { data } = useSelector((state) => state.products);

  return (
    <div className="p-navbar">
      <ProductMenuBar />

      <Box className="homeWrapper">
        <Banner />

        {/***** Sliders *****/}
        <SliderWithAdvertisement
          allProducts={data}
          title="Deal of the Day"
          timer={true}
        />

        <MidSection />

        <Slider allProducts={data} title="Discounts for You" timer={false} />
        <Slider allProducts={data} title="Suggesting Items" timer={false} />
        <Slider allProducts={data} title="Recommended Items" timer={false} />
        <Slider allProducts={data} title="Top Selection" timer={false} />
        <Slider allProducts={data} title="Men's Footware" timer={false} />
        <Slider allProducts={data} title="Trending Offers" timer={false} />
        <Slider allProducts={data} title="Season's top Picks" timer={false} />
      </Box>
    </div>
  );
};

export default Home;
