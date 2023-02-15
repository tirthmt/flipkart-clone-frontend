// Importing Utils Service
import {
  getProductsList,
  getProductsDetails,
} from "../../utils/service/productService";

// Importing Constants
import * as actionType from "../constants/productConstants";

export const getAllProducts = () => async (dispatch) => {
  try {
    const { data } = await getProductsList();
    dispatch({ type: actionType.GET_ALL_PRODUCTS_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({
      type: actionType.GET_ALL_PRODUCTS_FAIL,
      payload: error.message,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionType.GET_PRODUCT_DETAILS_REQUEST });
    const { data } = await getProductsDetails(id);
    dispatch({
      type: actionType.GET_PRODUCT_DETAILS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: actionType.GET_PRODUCT_DETAILS_FAIL,
      payload: error.message,
    });
  }
};
