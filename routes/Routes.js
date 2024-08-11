const express = require('express');
const router = express.Router();

const userController = require('../controllers/controller');

//render routes
router.get('/index', userController.renderIndex);
router.get('/login', userController.renderLogin);
router.get('/signup', userController.renderSingup);
router.get('/cuestionarios', userController.renderCuestionarios);
router.get('/r-invalido', userController.renderR_invalido);
router.get('/l-invalido', userController.renderL_invalido);
router.get('/l1-invalido', userController.renderL1_invalido);
router.get('/ninos', userController.renderNiños);
router.get('/conexion', userController.renderConexion);
router.get('/espacio', userController.renderEspacio);


router.post('/adduser', userController.adduser);
router.post('/loginuser', userController.loginuser);



module.exports = router;
