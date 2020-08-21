const express = require('express');
const routes = express.Router();
const TarefaController = require('./controllers/tarefaControl');

routes.post('/criar' , TarefaController.criar);
routes.delete('/excluir/:id' , TarefaController.excluir);
routes.get('/listar' , TarefaController.listar);
routes.get('/listar/:id' , TarefaController.detalhe);
routes.put('/alterar' , TarefaController.alterar);

module.exports = routes;