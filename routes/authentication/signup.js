var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('authentication/signup', { title: 'Sign Up' });
});

module.exports = router;
