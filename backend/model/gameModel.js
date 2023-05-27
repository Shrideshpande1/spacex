const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
  name: {
    type: String,

    trim: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
  },
  image: {
    type: String,
  },
  place: {
    type: String,
  },
  price: {
    type: Number,
  },
  color: {
    type: String,
  },
  mileage: {
    type: String,
  },
  category: {
    type: String,
  },

  points: [
    {
      point: { type: String },
    },
  ],
});

module.exports = mongoose.model("games", gameSchema);
