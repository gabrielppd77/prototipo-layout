import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import SignInSide from "./pages/SignInSide";
import MainLayout from "./pages/MainLayout";
import Dashboard from "./pages/Dashboard";
import { theme } from "./theme/theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInSide />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
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
  // const [mode, setMode] = React.useState<PaletteMode>("light");

  // const defaultTheme = createTheme(getSignInSideTheme(mode));

  // React.useEffect(() => {
  //   const savedMode = localStorage.getItem("themeMode") as PaletteMode | null;
  //   if (savedMode) {
  //     setMode(savedMode);
  //   } else {
  //     const systemPrefersDark = window.matchMedia(
  //       "(prefers-color-scheme: dark)"
  //     ).matches;
  //     setMode(systemPrefersDark ? "dark" : "light");
  //   }
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
