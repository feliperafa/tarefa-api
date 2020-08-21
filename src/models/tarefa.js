const mongoose = require('../database');

const TarefaSchema = new mongoose.Schema({
    descricao:{
        type: String,
        require: true,
    },
    status: {
        type: String,
        require: true,
    }, 
    data_criacao: {
        type: Date,
        default: Date.now,
    },

});

const Tarefa = mongoose.model('Tarefa', TarefaSchema);

module.exports = Tarefa;