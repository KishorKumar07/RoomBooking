import { CssBaseline, ThemeProvider } from '@mui/material';
import { useRoutes } from 'react-router-dom';

import { ThemeSettings } from './theme/Theme';
import Router from './routes/Router';

function App() {
  const routing = useRoutes(Router);
  const theme = ThemeSettings();

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        {routing}
    </ThemeProvider>
  );
}

export default App;
