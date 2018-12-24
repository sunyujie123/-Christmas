var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var time = (new Date()).getTime();
  res.render('index.html',{ time: time});
});

module.exports = router;
