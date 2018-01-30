var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('My deployment github respository can be found at https://github.com/jani5454/DeployToAzure');
});

module.exports = router;