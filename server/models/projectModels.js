const mongoose = require('mongoose');

const { Schema, model } = mongoose;

// ----- Mongoose Schemas
// handles project connections
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

// ----- Models
const Project = model('project', projectSchema);

module.exports = Project;