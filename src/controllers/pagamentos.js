const db = require('../dataBase/connection'); 

module.exports = {
    async listarPagamentos(request, response) {
        try {
            const sql =`
           INSERT INTO PAGAMENTOS (contrato_id, pag_valor, pag_data_pagamento, pag_status) VALUES
            `;

            const [rows] = await db.query(sql);
            
            const nRegistros = rows.length;


            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de Pagamentos', 
                nRegistros,
                dados: rows
            });


        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async cadastrarPagamentos(request, response) {
        try {

            const { contrato_id, pag_valor, pag_data_pagamento, pag_status } = request.body;
            
            // Instrução SQL
            const sql = `
              INSERT INTO PAGAMENTOS (contrato_id,
               pag_valor,
                pag_data_pagamento,
                pag_status) VALUES
                 (?,?,?,?)
                    `;

                    const values = [contrato_id, pag_valor, pag_data_pagamento, pag_status];

                    const [result] = await db.query(sql, values);

                    const dados = {
                        contrato_id: result.insertId,
                        pag_valor, 
                        pag_data_pagamento, 
                        pag_status
                    };

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de pagamentos', 
                dados: dados
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async editarPagamentos(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Alteração no pagamento', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async apagarPagamentos(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Exclusão de pagamento', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
};  