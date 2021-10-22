var express = require('express');
var router = express.Router();
const {
  encoded1,
  encoded2,
  decoded1,
  decoded2,
} = require('../public/javascripts/constants');

/* GET users listing. */
router.get('/', function (req, res, next) {
  // res.send('respond with a resource');
  res.json([
    {
      id: 1,
      type: 'LOCAL',
      decodedImageURI: decoded1,
      encodedImageURI: encoded1,
    },
    {
      id: 2,
      type: 'EXTERNAL',
      decodedImageURI: decoded2,
      encodedImageURI: encoded2,
    },
  ]);
});

module.exports = router;
