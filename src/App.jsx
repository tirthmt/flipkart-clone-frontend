import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import DataProvider from "./hooks/context/DataProvider";

const App = () => {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
};

export default App;
