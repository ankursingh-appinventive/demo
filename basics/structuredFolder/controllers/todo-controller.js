const express = require('express');

const createTodo = (req,res) =>{
        // save to database
    // [
        // validation
        // if(!req.body.text){
        //     throw error("text is required");
        // }
    // ]

        res.json({
            successful: true,
            data:req.body,
        });
};

const getTodos = (req,res)=>{
    // get all todos

    res.json({
        successful: true,
        data:[{id:1, text:'Node js'}],
    });
};

module.exports = {
    createTodo,
    getTodos,
}