const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require('cors');

const schoolRoutes = require('./routes/school');
const schoolPresentationRoutes = require('./routes/schoolPresentation');
const schoolProgramRoutes = require('./routes/schoolPrograms');
const schoolOwnerRoutes = require('./routes/schoolOwner');
const domaineRoutes = require('./routes/domaine');

// Express app instance
const app = express();

// Middlewares
app.use(cors({
    origin: process.env.PRO_DOMAINE, 
    optionsSuccessStatus: 200
}));

app.use(express.json({limit: '50mb'}));

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/school', schoolRoutes);
app.use('/presentation', schoolPresentationRoutes);
app.use('/programs', schoolProgramRoutes);
app.use('/schoolOwner', schoolOwnerRoutes);
app.use('/domaine', domaineRoutes)

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // App runing
        app.listen(process.env.PORT, () => {
            console.log(`App Connect to DB`);
            console.log(`And runing on port ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log(err);
    })
