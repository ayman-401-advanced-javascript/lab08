'use strict';

const schema = require('./products-schema.js');
const Model = require('../mode-data');

class Products extends Model{
  constructor(){
    super(schema);
  }
}
module.exports = new Products();