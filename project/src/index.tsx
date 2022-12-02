import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { city } from './mocks/city';
import { offers } from './mocks/offers';
import { points } from './mocks/points';
// import { reviews } from './mocks/rewiers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App offers = { offers } city={city} points={points} /*reviews = { reviews }*/ />
  </React.StrictMode>,
);
