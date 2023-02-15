import React, { useEffect } from "react";
import "./ProductDetail.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import Carousel from "./Carousel/Carousel";
import Content from "./Content/Content";

// Actions
import { getProductDetails } from "../../redux/actions/productActions";

const ProductDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  // Getting Single Product from Store
  const { loading, data } = useSelector((state) => state.singleProduct);

  return (
    <React.Fragment>
      <div className="p-navbar">
        <Box className="d-flex ProductDetail">
          {!loading && data && Object.keys(data).length > 0 && (
            <>
              <Carousel data={data} />
              <Content data={data} />
            </>
          )}
        </Box>
      </div>
    </React.Fragment>
  );
};

export default ProductDetail;
