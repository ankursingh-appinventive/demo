const Sequelize = require('sequelize');

const sequelize = new Sequelize('employee','postgres','      ',{
    host: 'localhost',
    dialect: 'postgres',
    pool: {max:5,min:0,ideal:1000}
});

sequelize.authenticate()
.then(()=>{
    console.log("connected");
})
.catch(err=>{
    console.log("Error"+err);
});