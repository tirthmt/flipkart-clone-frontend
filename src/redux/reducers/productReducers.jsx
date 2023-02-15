// Importing Constants
import * as actionType from "../constants/productConstants";

export const getAllProductsReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case actionType.GET_ALL_PRODUCTS_SUCCESS:
      return { data: action.payload };
    case actionType.GET_ALL_PRODUCTS_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

export const getProductDetailsReducer = (state = { data: {} }, action) => {
  switch (action.type) {
    case actionType.GET_PRODUCT_DETAILS_REQUEST:
      return { loading: true };
    case actionType.GET_PRODUCT_DETAILS_SUCCESS:
      return { loading: false, data: action.payload };
    case actionType.GET_PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case actionType.GET_PRODUCT_DETAILS_RESET:
      return { data: {} };
    default:
      return state;
  }
};
