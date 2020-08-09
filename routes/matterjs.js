var express = require('express');
var router = express.Router();

router.get('/double_pendulum', function(req, res, next) {
  res.render("matterjs/double_pendulum");
});

module.exports = router;
