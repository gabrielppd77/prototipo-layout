import { IconButton, useTheme } from "@mui/material";

import Box from "@mui/material/Box";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function NotificationSection() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        ml: 2,
        mr: 3,
        [theme.breakpoints.down("md")]: {
          mr: 2,
        },
      }}
    >
      <IconButton>
        <NotificationsIcon color="secondary" />
      </IconButton>
    </Box>
  );
}
