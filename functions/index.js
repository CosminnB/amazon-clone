const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HjjqTL8xnMhGL7BsRLHHmELpKZG1pHXBOmr089XEY3SlwmNpKkgLAjE3MkOv7ML0H7PBMwonztGG63qSNzOZPS100ha0rIMQ0"
);
// -API

// -App config
const app = express();

// -Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// -API Routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request recieved for this amount >> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //in subunits
    currency: "usd",
  });

  //OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// -Listen command
exports.api = functions.https.onRequest(app);
//http://localhost:5001/clone-7a06b/us-central1/api
