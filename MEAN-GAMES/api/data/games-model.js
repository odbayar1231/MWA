const mongoose = require('mongoose');

const positionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
  },
  coordinates: {
    type: [Number],
    index: '2dsphere',
  },
});

const reviewSchema = new mongoose.Schema({
  minAge: Number,
  designers: String,
});
const GamesSchema = new mongoose.Schema({
  title: String,
  year: Date,
  position: positionSchema,
  rate: {
    type: Number,
    required: true,
  },
  price: Number,
  minPlayers: Number,
  maxPlayers: Number,
});

mongoose.model('Games', GamesSchema, 'data');
