const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name cannot be empty.']
  },
  username: {
    type: String,
    unique: true,
    required: [true, 'Username cannot be empty.']
  },
  role: {
    type: String,
    required: [true, 'Role cannot be empty'],
    enum: ['user', 'group', 'page']
  },
  active: {
    type: Boolean,
    default: true
  },
  creation_date: {
    type: String
  },
  updation_date: {
      type: Date,
      default: Date.now()
  }
})

module.exports = mongoose.model('User', userSchema);