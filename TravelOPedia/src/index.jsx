import React from 'react';
import ReactDOM from 'react-dom/client';
import DestinationIndex from './app/components/DestinationIndex';
import Header from './app/layout/Header';
import { Provider } from 'react-redux';
import { store } from './app/redux/store';
import RandomDestination from './app/components/RandomDestination';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <DestinationIndex />
      <RandomDestination />
    </Provider>
  </React.StrictMode>
);
