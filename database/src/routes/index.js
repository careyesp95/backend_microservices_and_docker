const {Router} = require('express');
const {getCharacters, getCharacterById} = require('../controllers/getCharacters.js');

const router = Router();

router.get('/:model', getCharacters)
router.get('/:model/:id', getCharacterById)


module.exports = router;