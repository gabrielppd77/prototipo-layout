import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(75, 169, 193)",
      contrastText: "#FFFFFF",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        color: "primary",
        variant: "contained",
        size: "small",
        style: { textTransform: "none" },
      },
    },
    MuiTab: {
      defaultProps: {
        style: { textTransform: "none" },
      },
    },
    MuiFab: {
      defaultProps: {
        style: { textTransform: "none" },
      },
    },
    MuiSvgIcon: {
      defaultProps: {
        fontSize: "small",
      },
    },
    MuiIcon: {
      defaultProps: {
        fontSize: "small",
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: "small",
        color: "primary",
      },
    },
    MuiTextField: {
      defaultProps: {
        size: "small",
        fullWidth: true,
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: 8,
        },
      },
    },
  },
});
