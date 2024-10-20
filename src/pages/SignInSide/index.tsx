import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";

import { createTheme, ThemeProvider, PaletteMode } from "@mui/material/styles";

import Content from "./Content";
import SignInCard from "./SignInCard";

export default function SignInSide() {
  const [mode, setMode] = React.useState<PaletteMode>("light");

  const defaultTheme = createTheme({ palette: { mode } });

  React.useEffect(() => {
    const savedMode = localStorage.getItem("themeMode") as PaletteMode | null;
    if (savedMode) {
      setMode(savedMode);
    } else {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setMode(systemPrefersDark ? "dark" : "light");
    }
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline enableColorScheme />
      <Stack
        direction="column"
        component="main"
        sx={[
          {
            justifyContent: "space-between",
            height: { xs: "auto", md: "100vh" },
          },
          (theme) => ({
            backgroundImage:
              "radial-gradient(ellipse at 70% 51%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
            backgroundSize: "cover",
            ...theme.applyStyles("dark", {
              backgroundImage:
                "radial-gradient(at 70% 51%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
            }),
          }),
        ]}
      >
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          sx={{
            justifyContent: "center",
            gap: { xs: 6, sm: 12 },
            p: { xs: 2, sm: 4 },
            m: "auto",
          }}
        >
          <Content />
          <SignInCard />
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
