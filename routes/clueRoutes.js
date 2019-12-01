var express = require('express');
var router = express.Router();
var clueController = require('../controllers/clueController.js');

/*
 * GET
 */
router.get('/', clueController.list);

router.get('/removedangerously/:id', clueController.removedangerously);

router.get('/by_hunt_id/:id', clueController.by_hunt_id);

/*
 * GET
 */
router.get('/:id', clueController.show);

/*
 * POST
 */
router.post('/', clueController.create);

/*
 * PUT
 */
router.put('/:id', clueController.update);

/*
 * DELETE
 */
router.delete('/:id', clueController.remove);

module.exports = router;
