const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose')
const db = require('./config/keys')
const cors = require('cors');
require('dotenv').config()

const app = express();

//allow cross origin requests
app.use(cors());

//connect to mongo database
mongoose.connect('mongodb+srv://admin:admin99Jojo@cluster0-cgk96.mongodb.net/test?retryWrites=true&w=majority' , { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => console.log('connected to database'));

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(process.env.PORT || 4000)