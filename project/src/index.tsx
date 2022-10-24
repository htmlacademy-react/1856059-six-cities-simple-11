import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

export type MainPageProps = {
  placesCount: number;
}

const mainPageProps: MainPageProps = {
  placesCount: 5
};

root.render(
  <React.StrictMode>
    <App {...mainPageProps} />
  </React.StrictMode>,
);
