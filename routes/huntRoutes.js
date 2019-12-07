var express = require('express');
var router = express.Router();
var huntController = require('../controllers/huntController.js');

/*
 * GET
 */
router.get('/', huntController.list);

router.get('/removedangerously/:id', huntController.removedangerously);

/*
 * GET
 */
router.get('/:id', huntController.show);

router.get('/inc_num_of_completions/:id', huntController.inc_num_of_completions);

router.get('/inc_num_of_downloads/:id', huntController.inc_num_of_downloads);

/*
 * POST
 */
router.post('/', huntController.create);

/*
 * PUT
 */
router.put('/:id', huntController.update);

/*
 * DELETE
 */
router.delete('/:id', huntController.remove);

module.exports = router;
