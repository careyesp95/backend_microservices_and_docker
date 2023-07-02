const HandleErrors = require('../utils/errors/handleErrors');


function charactersValidation(req,res,next){
    const {name} = req.body;
    if(!name) throw new HandleErrors('no ha sido creado', 401)
    next();

}

module.exports = charactersValidation;