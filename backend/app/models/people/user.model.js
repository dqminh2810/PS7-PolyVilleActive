const mongoose = require('mongoose');
const { visitorSchema } = require('../people/visitor.model.js');
const { organizerSchema } = require('../people/organizer.model.js');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Include your name"]
  },
  email: {
    type: String,
    required: [true, "Please Include your email"]
  },
  password: {
    type: String,
    required: [true, "Please Include your password"]
  },
  tokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
  ],
  details_user: {
      type: mongoose.Schema.Types.Mixed,
      enum: [visitorSchema, organizerSchema],
  },
  friend_of: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  participate_to: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
  }],
  live_in: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City',
  },
});

//this method will hash the password before saving the user model
userSchema.pre("save", async function(next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

//this method generates an auth token for the user
userSchema.methods.generateAuthToken = async function() {
  const user = this;
  const token = jwt.sign({ _id: user._id, name: user.name, email: user.email },
    "secret");
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

//this method search for a user by email and password.
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error({ error: "Invalid login details" });
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error({ error: "Invalid login details" });
  }
  return user;
};


// User model
const User = mongoose.model('User', userSchema, 'User');
module.exports = { userSchema, User };
