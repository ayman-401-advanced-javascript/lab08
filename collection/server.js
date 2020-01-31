'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const categoriesRoutes = require('../collection/routes/categories');
const productsRoutes = require('../collection/routes/products');
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api/v1', categoriesRoutes);
app.use('/api/v1', productsRoutes);

module.exports = {
  server: app,
  start: port =>{
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT,()=>console.log(`server is listening to port: ${PORT}`));
  },
};