const app = require('./app');

// const express = require('express');
// const app = express();
// const todoRoutes = require('./todos/todo-routes');

// app.use('/todos',todoRoutes);

const PORT = process.env.PORT || 5000;

/* DELETE
app.get('/',(req,res)=>{
    res.json({
        successful: true,
        data:[1,2,3],
    });
});
*/

// app.post('/todos',(req,res)=>{
//     // save to database

//     res.json({
//         successful: true,
//         data:req.body,
//     });
// });

// app.get('/todos',(req,res)=>{
//     // get all todos

//     res.json({
//         successful: true,
//         data:[{id:1, text:'Node js'}],
//     });
// });


app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
});
