const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const schoolRoutes = require('./routes/school');
const schoolPresentationRoutes = require('./routes/schoolPresentation');

// env config
dotenv.config();

// Express app instance
const app = express();

// Listen Port
const port = process.env.PORT

// Middleware pour parser le JSON
app.use(express.json());

// Routes
app.use('/school', schoolRoutes);
app.use('/presentation', schoolPresentationRoutes)

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // App runing
        app.listen(port, () => {
            console.log(`App Connect to DB`);
            console.log(`And runing on port ${port}`);
        })        
    })
    .catch((err) => {
        console.log(err);
    })
