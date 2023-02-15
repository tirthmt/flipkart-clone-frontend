import React, { useState } from "react";
import "./AuthDialog.scss";
import Dialog from "@mui/material/Dialog";
import { Box } from "@mui/material";

import LoginPopupImage from "../../assets/Images/loginPopup.png";

import Login from "./Login/Login";
import Register from "./Register/Register";

const AuthDialog = ({ open, setOpen }) => {
  // For Toggle between Login and Register dialog
  const [createAccount, setCreateAccount] = useState(false);

  // For close the Login/Register dialog
  const handleClose = () => {
    setOpen(false);
    setCreateAccount(false);
  };

  // For passing setCreateAccount(true) in Login When click on New to Flipkart
  const navigateFromLoginToRegister = () => {
    setCreateAccount(true);
  };

  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose}>
        <Box className="AuthPopup d-flex">
          {/****** Leftside *******/}
          <Box className="leftSide">
            <img src={LoginPopupImage} alt="LoginPopup" />
          </Box>

          {/****** Rightside *******/}
          <Box className="rightSide">
            {createAccount ? (
              <Register handleClose={handleClose} />
            ) : (
              <Login
                handleClose={handleClose}
                navigateFromLoginToRegister={navigateFromLoginToRegister}
              />
            )}
          </Box>
        </Box>
      </Dialog>
    </React.Fragment>
  );
};

export default AuthDialog;
