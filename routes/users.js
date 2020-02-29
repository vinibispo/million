var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/usuarios.json', (req, res)=>res.send('Você chegou aqui'))

module.exports = router;
