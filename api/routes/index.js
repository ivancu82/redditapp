const express = require('express');
const reddit = require('../config/reddit-auth');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  return res.status(200).json({ message: 'It works'});
});

router.get('/hot', function(req, res) {
 reddit
     .getHot()
     .then(data => res.status(200).json(data))
     .catch(error => res.status(500).json(error))
}
);

module.exports = router;

