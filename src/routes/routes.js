const express = require('express'); 
const router = express.Router(); 

const contratosController = require('../controllers/contratos'); 
const notas_fiscaisController = require ('../controllers/notas_fiscais'); 
const pagamentosController = require ('../controllers/pagamentos'); 

router.get('/contratos', contratosController.listarContratos); 
router.post('/contratos', contratosController.cadastrarContratos); 
router.patch('/contratos', contratosController.editarContratos); 
router.delete('/contratos', contratosController. apagarContratos); 

router.get('/notas_fiscais', notas_fiscaisController.listarNotas_fiscais); 
router.post('/notas_fiscais', notas_fiscaisController.cadastrarNotas_fiscais); 
router.patch('/notas_fiscais', notas_fiscaisController.editarNotas_fiscais); 
router.delete('/notas_fiscais',notas_fiscaisController.apagarNotas_fiscais); 


router.get('/pagamentos',   pagamentosController.listarPagamentos); 
router.post('/pagamentos', pagamentosController.cadastrarPagamentos); 
router.patch('/pagamentos', pagamentosController.editarPagamentos); 
router.delete('/pagamentos',pagamentosController.apagarPagamentos); 



module.exports = router;