import React from 'react'
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const [colscheme, setcolscheme] = React.useState("light");
  const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${colscheme})`);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
<>
<ThemeProvider theme={theme}>
<CssBaseline />
<Navbar colscheme={colscheme} setcolscheme={setcolscheme}/>
<Main/>
</ThemeProvider>
</>
  );
}

export default App;
