const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  Address:
  {
    type: String,
    required: true,
  },
  Gender:
   {
    type: String,
    required: true,
   },
});

module.exports = mongoose.model('doctorProfile', UserSchema);
