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

router.post('/', function(req, res, next) {
  Chat.create({id: req.body.id, name: req.body.name, message: req.body.message},(err,docs) =>{
  if (err) return res.send('error mas');
  res.json(docs);
  })  
  });

module.exports = router;
