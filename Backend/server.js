const express = require('express');

// Importing built-in middleware
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const mongoose = require('mongoose');

// Custom middleware
const authUser = require('./Middleware/auth');
const credentials =require('./Middleware/credentials.js');


// Importing Routes
const userRoutes = require('./Routes/api/User')
const journalRoutes = require('./Routes/api/Journal.js')


const connectDatabase = require('./Config/connectDatabase');
const corsOptions = require('./Config/corsOptions.js')

const PORT = 3500;
const app = express()


// Connecting to database
connectDatabase();

// Built-in Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(credentials);
app.use(cors(corsOptions));
app.use(cookieParser());


// Routes
app.use("/users", userRoutes);

// Everything after this requires authorization
app.use(authUser);
app.use(journalRoutes);




// Once mongoose emits the open event, will list to requests at the port
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');

    app.listen(PORT, () => 
        console.log(`Server running on port ${PORT}`)
    );
    
})