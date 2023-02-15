import React from "react";
import "./Header.scss";
import { AppBar, Toolbar, Box } from "@mui/material";
import { Link } from "react-router-dom";

import Search from "./Search/Search";
import CustomButtons from "./CustomButtons/CustomButtons";

import FlipkartIcon from "../../assets/Images/flipkartIcon.png";
import FlipkartLogo from "../../assets/Images/flipkartLogo.png";

const Header = () => {
  return (
    <div>
      <AppBar className="appbar">
        <Toolbar>
          <div className="appbarBoxParent">
            <Link to="/">
              <img className="flipkartLogo" src={FlipkartLogo} alt="Logo" />
            </Link>
            <Box>
              <p className="subHeading">
                Explore <span>Plus</span>
                <img className="flipkartIcon" src={FlipkartIcon} alt="Icon" />
              </p>
            </Box>
          </div>

          <Search />

          <CustomButtons />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
