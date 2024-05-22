const mongoose = require('mongoose');
const plm = require('passport-local-mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/linkedin_db');

const userSchema = new mongoose.Schema({
  phoneNo: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  fullName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    
  },
  posts: [],
  dateJoined: {
    type: Date,
    default: Date.now
  },
  dp: {
    type: String  
  }
});

userSchema.plugin(plm, {usernameField: 'email'})
const User = mongoose.model('User', userSchema);

module.exports = User;
