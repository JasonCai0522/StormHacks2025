const express = require('express');

// Importing built-in middleware
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const mongoose = require('mongoose');

// Importing Routes
const userRoutes = require('./Routes/api/User')


const connectDatabase = require('./Config/connectDatabase');


const PORT = 3500;
const app = express()


// Connecting to database
connectDatabase();

// Built-in Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(cookieParser());


// Routes
app.use(userRoutes);



// Once mongoose emits the open event, will list to requests at the port
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');

    app.listen(PORT, () => 
        console.log(`Server running on port ${PORT}`)
    );
    
})