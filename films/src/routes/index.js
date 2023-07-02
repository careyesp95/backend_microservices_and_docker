const {Router} = require('express');
const {createFilms, getFilms} = require('../controllers');
const middlewares = require('../middlewares');

const router = Router();
router.get('/', getFilms)
router.post('/', middlewares.filmsValidator, createFilms)

module.exports = router;