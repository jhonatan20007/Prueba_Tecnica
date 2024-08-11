const express = require('express');
const router = express.Router();
const { getAllUsers, createUser } = require('../controllers/userController');


router.get("/", function (req, res) {
  res.json({ mensaje: "¡Hola Mundo!" });
});


router.get('/users', getAllUsers);
router.post('/users', createUser);

module.exports = router;
