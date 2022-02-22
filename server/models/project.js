const mongoose = require('mongoose');

const { Schema } = mongoose;

// creates mongoose schema matching gql type definitions
const projectSchema = new Schema({
  orderState: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  client: {
    type: String,
    required: true
  },
  company: String,
  deliveryDate: Date, 
  rentalTerm: String,
  tag: String, 
}, {timestamps: true});

module.exports = projectSchema;