import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";

import LogoSection from "./LogoSection";
import NotificationSection from "./NotificationSection";
import ProfileSection from "./ProfileSection";

interface HeaderProps {
  toggleMenu: () => void;
}

export default function Header({ toggleMenu }: HeaderProps) {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          width: 228,
          display: "flex",
          [theme.breakpoints.down("md")]: {
            width: "auto",
          },
        }}
      >
        <Box
          component="span"
          sx={{ display: { xs: "none", md: "block" }, flexGrow: 1 }}
        >
          <LogoSection />
        </Box>

        <IconButton onClick={toggleMenu}>
          <Menu color="secondary" />
        </IconButton>
      </Box>

      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />

      <NotificationSection />
      <ProfileSection />
    </>
  );
}
