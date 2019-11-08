const router = require('express').Router();
const {
    getAllController,
    addController,
    updateController,
    deleteController
} = require('./controller.js');

router.route('/photo')
      .get(getAllController)
      .post(addController)
      .put(updateController)
      .delete(deleteController)

module.exports = router;