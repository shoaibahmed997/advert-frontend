import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { QueryClientProvider,QueryClient } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient()



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);


serviceWorkerRegistration.unregister();


