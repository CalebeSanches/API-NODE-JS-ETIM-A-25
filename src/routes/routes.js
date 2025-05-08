const express = require('express'); 
const router = express.Router(); 

const contratosController = require('../controllers/contratos'); 


router.get('/contratos', contratosController.listarContratos); 
router.post('/contratos', contratosController.cadastrarContratos); 
router.patch('/contratos', contratosController.editarContratos); 
router.delete('/contratos', contratosController. apagarContratos); 


module.exports = router;