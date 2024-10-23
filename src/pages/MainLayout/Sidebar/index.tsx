import { Chip, Stack, useTheme } from "@mui/material";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";

import { drawerWidth } from "..";

import MenuList from "./MenuList";
import LogoSection from "../Header/LogoSection";

interface SidebarProps {
  isOpenMenu: boolean;
  toggleMenu: () => void;
}

export default function Sidebar({ isOpenMenu, toggleMenu }: SidebarProps) {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : "auto" }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant={matchUpMd ? "persistent" : "temporary"}
        anchor="left"
        open={isOpenMenu}
        onClose={toggleMenu}
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            borderRight: "none",
            [theme.breakpoints.up("md")]: {
              top: "88px",
            },
          },
        }}
        ModalProps={{ keepMounted: true }}
        color="inherit"
      >
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Box sx={{ display: "flex", p: 2, mx: "auto" }}>
            <LogoSection />
          </Box>
        </Box>

        <MenuList />

        <Stack direction="row" justifyContent="center" sx={{ mb: 2 }}>
          <Chip
            label={import.meta.env.VITE_APP_VERSION}
            disabled
            color="secondary"
            size="small"
            sx={{ cursor: "pointer" }}
          />
        </Stack>
      </Drawer>
    </Box>
  );
}
