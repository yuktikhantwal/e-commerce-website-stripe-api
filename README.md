# E-commerce Store with Stripe

Project Description

In this project, we’ll build an e-commerce store with cart and payment functionalities. We’ll also integrate the Stripe API into our application to accept payments from users for the products added to their cart.

We’ll also use the Fake Store API that provides data for e-commerce websites. We’ll use it to fetch and display product categories and the products themselves in the store.

We’ll use the Express framework on Node.js to develop the server API. After implementing the front-end components and adding the payment functionality, we will set up a server to process those payments. The finalized product will fetch the product data from the Fake Store API, allowing users to add products to the cart and make Stripe payments via the Node.js server.

The components in the application are styled in a way to provide you with an initial template of the application. You can style and customize them as you want.

---

## Features

- Product categories and product listing (sourced from Fake Store API)
- Add to cart functionality with quantity management and totals
- Checkout and Stripe payment integration (server-side using the Stripe Node SDK)
- Basic routing with React Router
- Global state management with Redux Toolkit

## Tech stack

- Frontend: React, React Router, Redux Toolkit, Material UI
- Backend: Node.js, Express
- Payment: Stripe (server-side payment intents)
- External data: Fake Store API

## Prerequisites

- Node.js (16+ recommended)
- npm
- Stripe account (for API keys) — test keys are sufficient for development

## Repository layout (important files)

- `client/` — React frontend
  - `client/package.json` — client scripts (dev server runs with `npm start`)
  - `client/src/index.js` — React entry, loads Stripe publishable key from `REACT_APP_STRIPE_PUBLISHABLE_KEY`
  - `client/src/App.js` — App router and pages
  - `client/src/pages/ShopPage.js` — Fetches categories and renders product lists
  - `client/src/components/` — UI components and `storeSlice.js` (Redux logic)

- `server/` — Express backend
  - `server/index.js` — Express server handling `/payment` and using `process.env.STRIPE_SECRET_TEST_KEY`


## Install & run (development)

From repository root, open two terminals.

1) Start the server

```bash
cd server
# install once if needed
npm install
# run the server
node index.js
```

2) Start the client

```bash
cd client
# install once if needed
npm install
# start dev server (the project sets PORT=4000)
npm start
```

Open the frontend at `http://localhost:4000` (or the port shown in the console). The backend payment endpoint is at `http://localhost:3000/payment` by default.

## Build for production

- Build frontend:

```bash
cd client
npm run build
```

- Serve production build from `server/public` (the server already serves static from `public`): copy or move the client `build` output into `server/public` and start the server on your desired port.

## Troubleshooting

- Blank page on `localhost:3000`:
  - Confirm which service is running on which port. The server (Express) defaults to 3000; the React dev server is configured to run on 4000.
  - If you want the frontend on 3000, change `client/package.json` start script to use `PORT=3000` (and stop the server or change its `PORT`).

- Stripe errors:
  - Ensure test keys are used for development. Check `client` uses the publishable key, and `server` uses the secret key environment variable `STRIPE_SECRET_TEST_KEY`.


## Customization & next steps

- Style components in `client/src/App.css` and component CSS classes.
- Add user authentication, persist cart data, or replace Fake Store API with your own product API.

## License

This project is provided as-is for demonstration and learning purposes.
