const express = require('express');
const router = express.Router();
const { getAllCliente, createCliente } = require('../controllers/clienteController');


router.get("/cliente", function (req, res) {
  res.json({ mensaje: "¡Hola Mundo!" });
});


router.get('/cliente', getAllCliente);
router.post('/cliente', createCliente);

module.exports = router;
