var express = require('express');
var router = express.Router();
const Chat = require('../models/chat');

/* GET users listing. */
router.get('/', function(req, res, next) {
Chat.find({},(err,docs) =>{
if (err) return res.send('error mas');
res.json(docs);
})

  
});

module.exports = router;
