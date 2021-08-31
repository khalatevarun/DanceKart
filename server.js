const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

app.listen(port, () => console.log('Linstening on port', port));

// prettier-ignore

const stripe = require('stripe')('sk_test_51JSjAISAFlZDjAUsWijnPMh9gaoPRTTrZ7fpZmNEUVcKUhuG7uHCCzobMBjOATZcVLlTB25F3dXIZOxt7Xwymthl00y2OzxP38')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
  console.log('POST REQUEST >>>');
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
