const express = require("express");
const dotenv=require("dotenv").config();
const cors = require("cors");
const port = 8000;
const app = express();
const router = express.Router();

const stripe = require('stripe')(process.env.SECRET_KEY);

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
app.use(express.json());

router.get("/", (req, res) => {
  res.status(200).json({ message: "hello home route of small server" });
});

router.post("/cartData", async(req, res) => {
  const cartData = req.body.cart;
  const userData = req.body.formData;
    //do payment with stripe...
    // const charge = await stripe.charges.create({
    //     amount: 2000, // amount in cents
    //     currency: 'usd',
    //     source: 'tok_visa', // token obtained with Stripe.js
    //     description: 'Charge for test@example.com',
    //   });
  res.status(200).json({ ...cartData,...userData });
});

app.use(router);

app.listen(port, () => {
  console.log("Hello from small server");
});
