import React, { useState } from "react";
import "./Profile.scss";
import { Box, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);

  const handleProfileClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Logout = () => {
    setAccount("");
  };

  return (
    <React.Fragment>
      <Box className="c-pointer profileName" onClick={handleProfileClick}>
        {account}
      </Box>
      <Menu
        className="profileDropdownMenu"
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            Logout();
          }}
        >
          <PowerSettingsNewIcon fontSize="small" />
          <Typography>Logout</Typography>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default Profile;
