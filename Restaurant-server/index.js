// Import required modules
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const stripe = require("stripe")('sk_test_51OwHAFSFmZUxKFRwXXFFvXBi81aQTdUMZxPFvRbZZRijQRaW1BFc7Q6meV5uLJjeah29IiqDP9o9FUYWe1BiuVmP00sNSZcZL1');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();
const port = process.env.PORT || 6001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB configuration using Mongoose
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@restuarant-client.azbretz.mongodb.net/Restuarant-client`)
  .then(() => {
    console.log("MongoDB Connected Successfully!");
  })
  .catch((error) => console.log("Error connecting to MongoDB", error));

// JWT authentication endpoint
app.post('/jwt', async(req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '1hr'
  });
  res.send({ token });
});

// Import routes
const menuRoutes = require('./api/routes/menuRoutes');
const cartRoutes = require('./api/routes/cartRoutes');
const userRoutes = require('./api/routes/userRoutes');
const Payments = require('./api/routes/Payments');
const adminStats = require('./api/routes/adminStats');
const orderStats= require('./api/routes/orderStats');

// Route middleware
app.use('/menu', menuRoutes);
app.use('/carts', cartRoutes);
app.use('/users', userRoutes);
app.use('/Payments', Payments);
app.use('/adminStats', adminStats);
app.use('/orderStats',orderStats );



// Stripe payment route
app.post("/create-payment-intent", async (req, res) => {
  const { price } = req.body;
  const amount = price * 100;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "inr",
    payment_method_types: ["card"],
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Default route
app.get("/", (req, res) => {
  res.send("Hello Foodi Client Server!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
