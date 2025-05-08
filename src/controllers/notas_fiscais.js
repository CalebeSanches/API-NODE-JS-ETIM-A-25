const db = require('../dataBase/connection'); 

module.exports = {
    async listarNotas_fiscais(request, response) {
        try {
            const sql =`
            SELECT
               nota_fiscal_id, contrato_id, nota_fiscal_numero, nota_fiscal_data_emissao, nota_fiscal_detalhes FROM NOTAS_FISCAIS;
            `;

            const [rows] = await db.query(sql);
            
            const nRegistros = rows.length;


            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de notas_fiscais', 
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
    async cadastrarNotas_fiscais(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de usuários', 
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
    async editarNotas_fiscais(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Alteração no cadastro de usuário', 
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
    async apagarNotas_fiscais(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Exclusão de usuário', 
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