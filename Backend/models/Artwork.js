const mongoose = require('mongoose');

const artworkSchema = new mongoose.Schema({
  title: String,
  artistName: String,
  description: String,
  image: String,
  location: String, // café / hotel
  contact: String   // phone number
});

module.exports = mongoose.model('Artwork', artworkSchema);
