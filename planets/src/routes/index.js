const {Router} = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', controllers.getplanets);
router.post('/', controllers.createPlanets);

module.exports = router;