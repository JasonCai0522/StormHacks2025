const express = require('express');

// Importing built-in middleware
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const mongoose = require('mongoose');

const connectDatabase = require('./Config/connectDatabase');


const PORT = 3500;


const app = express()


// Connecting to database
connectDatabase();

// Built-in Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());





// Once mongoose emits the open event, will list to requests at the port
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');

    app.listen(PORT, () => 
        console.log(`Server running on port ${PORT}`)
    );
    
})