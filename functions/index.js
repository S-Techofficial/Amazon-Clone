const functions = require('firebase-functions');
require('dotenv').config()

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require('express');
const cors = require('cors');
const stripe = require("stripe")(process.env.SECRET_KEY);

// API

// App config
const app = express();

// Middlewares
app.use(cors({origin:true}));
app.use(express.json());

// API routes
app.get('/',(req,res) => res.status(200).send('Hello World'))

app.post('/payments/create', async(req,res) => {
    const total = req.query.total;
    console.log('Payment Request received >>>',total)

    const paymentIntent = await stripe.paymentIntents.create({
        shipping: {
            name: 'Sumit thakur',
            address: {
              line1: '123 React Lane',
              postal_code: '',
              city: 'Los Angeles',
              state: 'CA',
              country: 'US',
            }},
        amount:total, // subunits of the currency
        currency:"usd",
        description:"Software Developement Services",
    });

    // OK - Created
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen command
exports.api = functions.https.onRequest(app);