const express = require('express');

const router = express.Router();

const postControllers = require('../controllers/postControllers.js'); 

router.get('/', postControllers.index);

router.get('/:id',postControllers.show);

router.post('/',postControllers.store);

router.put('/:id',postControllers.update);

router.patch('/:id',postControllers.modify);

router.delete('/:id',postControllers.destroy);

module.exports = router;