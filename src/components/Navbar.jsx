import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Menu,
  MenuItem,
  styled,
  Switch,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailIcon from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const MobileMenu = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

const Navbar = ({setMode, mode}) => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Facebook
        </Typography>
        <FacebookIcon
          onClick={() => setOpen(true)}
          sx={{ display: { sm: "none", xs: "block" } }}
        />
        <input
          style={{
            backgroundColor: "white",
            borderRadius: "5px",
            height: 30,
            border: "none",
            width: "40%",
          }}
          placeholder="Search..."
        />
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
          />
        </Box>
        <MobileMenu sx={{ display: { sx: "flex", sm: "none" } }}>
          <Avatar sx={{ width: 25, height: 25 }} />
          <Typography>Ubaid</Typography>
        </MobileMenu>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        //   anchorEl={anchorEl}
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Homepage</MenuItem>
        <MenuItem>Friends</MenuItem>
        <MenuItem>Account</MenuItem>
        <Switch onChange={() => setMode(mode === 'light' ? 'dark' : 'light')} />
      </Menu>
    </AppBar>
  );
};

export default Navbar;
