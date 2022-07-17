
// scroll bar
import 'simplebar/src/simplebar.css';

import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';


// @mui
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { store, persistor } from './redux/store';
// contexts
import { SettingsProvider } from './contexts/SettingsContext';
import { CollapseDrawerProvider } from './contexts/CollapseDrawerContext';
//
import App from './App';

// ----------------------------------------------------------------------

ReactDOM.render(
  <HelmetProvider>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
        <SettingsProvider>
          <CollapseDrawerProvider>
            <App />
          </CollapseDrawerProvider>
        </SettingsProvider>
        {/* </LocalizationProvider> */}
      </PersistGate>
    </ReduxProvider>
  </HelmetProvider>,
  document.getElementById('root')
);

