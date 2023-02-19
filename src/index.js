import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index/css/index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './stores/redux-store';
import AppContainer from './routers/App/AppContainer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <AppContainer />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
