import React from "react";
import "./ProductMenuBar.scss";
import { Box } from "@mui/material";

import { navData } from "../../../constants/data";

const Navbar = () => {
  return (
    <Box className="navbarWrapper">
      <Box className="subHeader">
        {navData ? (
          <>
            {navData.map((value) => (
              <Box key={value.text} className="productsMenu c-pointer">
                <img
                  className="d-flex m-auto"
                  src={value.url}
                  alt={value.text}
                />
                <p className="text-center m0 fw-600">{value.text}</p>
              </Box>
            ))}
          </>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
