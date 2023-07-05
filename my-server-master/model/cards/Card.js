/* const mongoose = require("mongoose");
const Image = require("./Image");
const {
  DEFAULT_STRING_SCHEMA_REQUIRED,
} = require("./helpers/mongooseValidaite");

const CardSchema = new mongoose.Schema({
  title: {
    type: String,
    minLength: 2,
    maxLength: 256,
    requierd: true,
    trim: true,
  },
  description: { ...DEFAULT_STRING_SCHEMA_REQUIRED, maxLength: 1024 },
  price: {
    type: Number,
    minLength: 1,
    required: true,
  },
  image: Image,

  likes: [String],
  bizNumber: {
    type: Number,
    minLength: 7,
    maxLength: 7,
    requierd: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Card = mongoose.model("cards", CardSchema);

module.exports = Card;
 */
const mongoose = require("mongoose");

const {
 
  DEFAULT_STRING_SCHEMA_REQUIRED,
} = require("./helpers/mongooseValidaite");

const cardSchema = new mongoose.Schema({
  title: DEFAULT_STRING_SCHEMA_REQUIRED,
  description: { ...DEFAULT_STRING_SCHEMA_REQUIRED, maxLength: 1024 },
  // image: Image,
  imageUrl: {
    type: String,
    match: RegExp(
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
    ),
    trim: true,
    default:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  },
  imageAlt: {
    type: String,
    maxLength: 256,
    trim: true,
    default:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  },
  price: {
    type: Number,
    minLength: 1,
    required: true,
  },
  bizNumber: {
    type: Number,
    minLength: 7,
    maxLength: 7,
    required: true,
    trim: true,
  },
 
  likes: [String],
  menuOrder: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Card = mongoose.model("cards", cardSchema);

module.exports = Card;