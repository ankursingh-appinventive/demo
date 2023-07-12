const express = require('express');
const app = express();

require('./models/index')

const PORT = 8000;

app.get('/',(req,res)=>{
    res.send("Home page");
});

app.listen(PORT,()=>{
    console.log(`server is listening at http://localhost:${PORT}`);
});