const mongoose = require("mongoose");


const bookAtableScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
    maxLength: 256,
  },
  phone: {
    type: String,
    required: true,
    match: RegExp(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/),
  },
  email: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 256,
  },
 
  isBusiness: { type: Boolean, default: false }, 
  orderStatus: { type: Boolean, default: false },
  bizNumber: {
    type: Number,
    minLength: 7,
    maxLength: 7,
    requierd: true,
    trim: true,
  },
  OrderMenu: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  card_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

const BookAtable = mongoose.model("bookAtable", bookAtableScheme);

module.exports = BookAtable;
