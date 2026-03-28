const Artwork = require('../models/Artwork');

// GET all artworks
exports.getArtworks = async (req, res) => {
  const artworks = await Artwork.find();
  res.json(artworks);
};

// POST new artwork
exports.createArtwork = async (req, res) => {
  const newArtwork = new Artwork(req.body);
  const saved = await newArtwork.save();
  res.json(saved);
};
