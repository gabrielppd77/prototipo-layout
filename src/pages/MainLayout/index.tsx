import { useState } from "react";

import { Outlet } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import { createTheme } from "@mui/material";

import Header from "./Header";
import Sidebar from "./Sidebar";
import MainComponent from "./MainComponent";

export const drawerWidth = 260;

export default function MainLayout() {
  const [isOpenMenu, setOpenMenu] = useState(true);

  function handleToggleMenu() {
    setOpenMenu((prev) => !prev);
  }

  const theme = createTheme();

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.default,
          transition: isOpenMenu ? theme.transitions.create("width") : "none",
        }}
      >
        <Toolbar>
          <Header toggleMenu={handleToggleMenu} />
        </Toolbar>
      </AppBar>
      <Sidebar isOpenMenu={isOpenMenu} toggleMenu={handleToggleMenu} />
      <MainComponent open={isOpenMenu}>
        <Outlet />
      </MainComponent>
    </Box>
  );
}
