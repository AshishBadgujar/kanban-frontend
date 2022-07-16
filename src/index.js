
// scroll bar
import 'simplebar/src/simplebar.css';

// // lightbox
// import 'react-image-lightbox/style.css';

// // map
// import 'mapbox-gl/dist/mapbox-gl.css';

// // editor
// import 'react-quill/dist/quill.snow.css';

// // slick-carousel
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// // lazy image
// import 'react-lazy-load-image-component/src/effects/blur.css';
// import 'react-lazy-load-image-component/src/effects/opacity.css';
// import 'react-lazy-load-image-component/src/effects/black-and-white.css';

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
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <SettingsProvider>
            <CollapseDrawerProvider>
              <App />
            </CollapseDrawerProvider>
          </SettingsProvider>
        </LocalizationProvider>
      </PersistGate>
    </ReduxProvider>
  </HelmetProvider>,
  document.getElementById('root')
);

