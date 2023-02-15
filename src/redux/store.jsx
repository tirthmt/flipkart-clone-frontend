import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Getting All Reducers
import {
  getAllProductsReducer,
  getProductDetailsReducer,
} from "./reducers/productReducers";

// Combining inside Root Reducers
const rootReducer = combineReducers({
  products: getAllProductsReducer,
  singleProduct: getProductDetailsReducer,
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
