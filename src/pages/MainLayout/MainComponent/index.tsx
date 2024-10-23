import React from "react";

import { Box } from "@mui/material";
import { drawerWidth } from "..";

interface MainComponentProps {
  open: boolean;
  children: React.ReactNode;
}

export default function MainComponent({ open, children }: MainComponentProps) {
  return (
    <Box
      component={"main"}
      sx={(theme) => ({
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        transition: theme.transitions.create(
          "margin",
          open
            ? {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
              }
            : {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }
        ),
        [theme.breakpoints.up("md")]: {
          marginLeft: open ? 0 : -(drawerWidth - 20),
          width: `calc(100% - ${drawerWidth}px)`,
        },
        [theme.breakpoints.down("md")]: {
          marginLeft: "20px",
          width: `calc(100% - ${drawerWidth}px)`,
          padding: "16px",
        },
        [theme.breakpoints.down("sm")]: {
          marginLeft: "10px",
          width: `calc(100% - ${drawerWidth}px)`,
          padding: "16px",
          marginRight: "10px",
        },
      })}
    >
      {children}
    </Box>
  );
}
