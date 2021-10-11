const express = require('express');
const path = require('path');

const login = require('./routes/login');
const register = require('./routes/register');

const app = express();

const PORT = process.env.PORT || 5000;

//Init middleware
app.use(express.json());

// DB Config
const db = require('./config/keys').mongoURI;

// import mongoose from 'mongoose';
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => res.send('API running'));
app.listen(PORT, () => console.log(`Server started on ${PORT}`));

// Define routes
app.use('/login', login);
app.use('/register', register);
