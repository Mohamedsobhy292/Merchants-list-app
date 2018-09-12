const mongoose = require("mongoose");

const merchantSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: "Please check your name",
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  avatarUrl: {
    type: String
  },
  email: {
    type: String,
    required: "Please check your email",
    trim: true
  },
  phone: {
    type: String,
    required: "Please check your phone",
    trim: true
  },
  hasPremium: {
    type: Boolean,
    default: false
  },
  bids: {
    type: Array
  }
});

module.exports = mongoose.model("Merchant", merchantSchema);
