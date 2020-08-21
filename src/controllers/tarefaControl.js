const express = require('express');
const Tarefa = require('../models/tarefa');

module.exports = {
    async criar(req, res) {
        try{
            const {descricao , status} = req.body

            if(!descricao || !status) 
            throw new Error('parametros invalidos') 

            const tarefa = await Tarefa.create({descricao,status})
            res.status(200).json(tarefa);
       
        }catch(error){
            res.status(500).json({ error: error.message });
        }
  
    },
    async listar(req, res) {
        try {

            const tarefas = await Tarefa.find({});
            res.status(200).json(tarefas)

        }catch(error) {
            res.status(500).json({ error: error.message });
        }
    },
    async excluir(req, res) {
        try {
            
            const id = req.params.id
           
            if(!id)
                throw new Error('parametros invalidos') 

            await Tarefa.deleteOne ( { _id: id } )
            res.status(200).json({OK: "excluído com sucesso"})

        } catch(error) {
            res.status(500).json({ error: error.message });
        }
    },
    async detalhe (req, res) {
        try{
            const id = req.params.id

            if(!id)
                throw new Error('parametros invalidos') 

            const tarefas = await Tarefa.find( { _id: id } );
                  res.status(200).json(tarefas)

        }catch(error){
            res.status(500).json({ error: error.message });
        }
         
    },
    async alterar(req, res) {

        const {_id ,descricao , status} = req.body
            
        if(!descricao || !status || !_id) 
            throw new Error('parametros invalidos') 
       
        try{
            const tarefas = await Tarefa.updateOne( { _id },
                {
                $set: { descricao, status },
            } );
            res.status(200).json({ok: 'alterado com sucesso'})

        }catch(error){
            res.status(500).json({ error: error.message });
        }
    } 
}