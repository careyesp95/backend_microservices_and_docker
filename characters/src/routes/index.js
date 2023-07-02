const { Router } = require('express');
const controllers = require('../controllers/index');
const middlewares = require('../middlewares/index');

const router = Router();

router.get('/', controllers.getCharacters);
router.post('/',middlewares.charactersValidation,  controllers.createCharacters);


module.exports = router;