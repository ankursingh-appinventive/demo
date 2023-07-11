const createTodoValidator = (req,res) =>{
    // save to database

    if(!req.body.text){
        //throw error text is required

        return res.json({
            successful: false,
            error: {text :['text is required'] } });
    }
    next();
};

module.exports = createTodoValidator;