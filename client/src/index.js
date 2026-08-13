import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';

// Stripe API integration
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const container = document.getElementById('root');
const root = createRoot(container);

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

root.render(
   <Provider store={store}>
      <Elements stripe={stripePromise}>
         <App />
      </Elements>
   </Provider>
);