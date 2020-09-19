require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const db = mongoose.connection;
const port = process.env.PORT || 5000;
const atlasUri = process.env.ATLAS_URI;
const localUri = process.env.LOCAL_URI;
const userRouter = require('./routes/users'); //routing middleware
const recipeRouter = require('./routes/recipes');
const ingredientRouter = require('./routes/ingredients');

const useLocalDB = true; //Toggle local development instance of MongoDB. 
                        // TODO: Figure out how to sync atlas cluster data to the local instance

app.use(cors());
app.use(express.json());

app.use('/', (req, res, next) => { //basic logging middleware to help with development
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
  }); 

if(useLocalDB) {
    console.log('Connecting to local cluster');
    mongoose.connect(localUri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
} else {
    console.log('Connecting to Atlas cluster');
    mongoose.connect(atlasUri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }); 
};

db.once('open', () => {
    console.log('DB Connection Successful!');
});

app.use('/users', userRouter);
app.use('/recipes', recipeRouter);
app.use('/ingredients', ingredientRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});