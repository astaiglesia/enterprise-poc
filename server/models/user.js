const mongoose = require('mongoose');

const { Schema, model } = mongoose;

// ----- Schemas
// handles login validation
const userSchema = new Schema({
  username: {
    type: String,
    rquired: [true, 'Username is required']
  },
  password: {
    type: String,
    rquired: [true, 'Password is required']
  }, 
  created: {
    type: Date, 
    required: [true, ' Created date is required']
  }
});

// ----- Models
const User = model('user', userSchema);

module.exports = User;