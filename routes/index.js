var express = require('express');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index");
});

module.exports = router;
