import Dashboard from '../Dashboard';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { ThemeProvider } from '@emotion/react';
import myTheme from '../../common /OrderTheme';
function App() {
  return (
    <ThemeProvider theme={myTheme}>
         <LocalizationProvider dateAdapter={AdapterDateFns}>
         <Dashboard/>
    </LocalizationProvider>
    </ThemeProvider>
   
   
  );
}

export default App;
