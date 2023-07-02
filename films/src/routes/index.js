const {Router} = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const router = Router();
router.get('/', controllers.getFilms)
router.post('/', middlewares.filmsValidator, controllers.createFilms)

module.exports = router;