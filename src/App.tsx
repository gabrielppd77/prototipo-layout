import * as React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { createTheme, ThemeProvider, PaletteMode } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import getSignInSideTheme from "./theme/getSignInSideTheme";

import SignInSide from "./pages/SignInSide";
import MainLayout from "./pages/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInSide />,
  },
  {
    path: "/main",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: (
          <div
            style={{
              backgroundColor: "red",
              width: "500px",
              height: "500px",
            }}
          >
            content
          </div>
        ),
      },
    ],
  },
]);

function App() {
  const [mode, setMode] = React.useState<PaletteMode>("light");

  const defaultTheme = createTheme(getSignInSideTheme(mode));

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
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
