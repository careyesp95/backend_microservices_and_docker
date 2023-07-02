const {ClientError} = require('../helpers/httpErrors');

function filmsValidator(req,res,next){
    const {name} = req.body;
    if(name) next();
    else throw new ClientError('El nombre es requerido' , 401)
    
}

module.exports = filmsValidator;