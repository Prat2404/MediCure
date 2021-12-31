const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('doctor', UserSchema);
