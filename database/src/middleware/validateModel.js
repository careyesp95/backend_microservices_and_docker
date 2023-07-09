
async function validateModel(req, res, next){
    const {model} = req.params;
    if(["Character","Film","Planet"].includes(model)){
        return next();
    }else {
        res.status(404).json({message: "Model not found"});
    }

}

module.exports = validateModel;