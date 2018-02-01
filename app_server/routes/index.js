const express = require('express');
const router = express.Router();

const ctrlMain = require('../Controllers/main');
const ctrlBigdogs = require('../Controllers/bigdogs');
const ctrlRules = require('../Controllers/rules');
const ctrlPugs = require('../Controllers/pugs');

/* GET home page. */
router.get('/', ctrlMain.index); 
router.get('/rules', ctrlRules.rulelist);
router.get('/bigdogs', ctrlBigdogs.bigdoglist); 
router.get('/pugs', ctrlPugs.puglist); 


module.exports = router;
