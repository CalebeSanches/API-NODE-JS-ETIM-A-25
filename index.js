const express = require('express');

const app = express();

const porta = 3333;

app.listem(porta, () => {
    console.log(`Servidor iniciado na porta ${porta}`);

});
