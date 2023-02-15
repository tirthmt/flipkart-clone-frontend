import React, { useState, useContext } from "react";
import "./CustomButtons.scss";
import { Box, Button, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { DataContext } from "../../../hooks/context/DataProvider";
import AuthDialog from "../../AuthDialog/AuthDialog";
import Profile from "../Profile/Profile";

const CustomButtons = () => {
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  };

  const { account, setAccount } = useContext(DataContext);

  return (
    <Box className="wrapper d-flex align-items-center">
      {/********* Toggle Functionality Between Login and Profile *********/}
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <Button
          variant="contained"
          className="loginButton"
          onClick={() => openDialog()}
        >
          Login
        </Button>
      )}

      <Typography>Become a Seller</Typography>
      <Typography>More</Typography>
      <Box className="d-flex">
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </Box>

      <AuthDialog open={open} setOpen={setOpen} />
    </Box>
  );
};

export default CustomButtons;
