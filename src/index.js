import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { QueryClientProvider,QueryClient } from 'react-query';

const queryClient = new QueryClient()



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <App />
    </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);


serviceWorkerRegistration.unregister();


