const express = require('express');
const { signUp, signIn, protect,signOut } = require('../controller/authController');

const userController = require('../controller/userController')
const router = express.Router();

router.post('/signUp', signUp);
router.post('/signIn', signIn);
router.get('/signOut', signOut);
router.post('/:id',protect, userController.getUser, userController.updateAcc)

router.route('/').post(userController.createAcc).get(protect, userController.getAllAcc);
// router.route('/:id').get(userController.getUser).patch(userController.updateAcc);

module.exports=router
