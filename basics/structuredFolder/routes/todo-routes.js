const express = require('express');
const { createTodo, getTodos } = require('../controllers/todo-controller');
const createTodoValidator = require('../middlewares/create-todo-validator');
const router = express.Router();

router.post('/', createTodoValidator,createTodo);        //(req,res)=>{
    // // save to database

    // res.json({
    //     successful: true,
    //     data:req.body,
    // });
// });

router.get('/', getTodos)      //(req,res)=>{
//     // get all todos

//     res.json({
//         successful: true,
//         data:[{id:1, text:'Node js'}],
//     });
// });

module.exports = router;