const PORT = 3000;
const apiRouter = require('./api');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { client } = require('./db');
require('dotenv').config();

const server = express();

client.connect();

server.use(bodyParser.json());
server.use('/api', apiRouter);
server.use(morgan('dev'));
server.use(express.json());


server.listen(PORT, () => {
  console.log('The server is up on port', PORT)
});

server.use((req,res,next) => {
  console.log("<____Body Logger Start____>");
  console.log(req.body);
  console.log("<____Body Logger End>");

  next();
});