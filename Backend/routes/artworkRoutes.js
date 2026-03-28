const express = require('express');
const router = express.Router();
const {
  getArtworks,
  createArtwork
} = require('../controllers/artworkController');

router.get('/', getArtworks);
router.post('/', createArtwork);

module.exports = router;
