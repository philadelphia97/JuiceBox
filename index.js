const PORT = 3000;
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const server = express();
const apiRouter = require('./juicebox/api');
server.use('/api', apiRouter);
server.use(morgan('dev'));
server.use(express.json());
const { client } = require('./juicebox/db');
client.connect();

console.log(process.env.JWT_SECRET);

server.listen(PORT, () => {
  console.log('The server is up on port', PORT)
});

server.use((req,res,next) => {
  console.log("<____Body Logger Start____>");
  console.log(req.body);
  console.log("<____Body Logger End>");

  next();
});