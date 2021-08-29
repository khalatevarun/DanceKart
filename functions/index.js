/* eslint-disable */

/* prettier-ignore */
const functions = require("firebase-functions");
// prettier-ignore
const express = require("express");
// prettier-ignore
const cors = require("cors");
// prettier-ignore

const stripe = require('stripe')('sk_test_51JSjAISAFlZDjAUsWijnPMh9gaoPRTTrZ7fpZmNEUVcKUhuG7uHCCzobMBjOATZcVLlTB25F3dXIZOxt7Xwymthl00y2OzxP38')

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
// http://localhost:5001/clone-f8a32/us-central1/api
