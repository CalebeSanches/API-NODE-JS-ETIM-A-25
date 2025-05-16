const express = require('express'); 
const router = express.Router(); 

const RotaCalebe = require ('./routes-calebe');

router.use('/', RotaCalebe)

module.exports = router;