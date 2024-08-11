const express = require('express');
const router = express.Router();
const { getAllFacturas, createFactura } = require('../controllers/facturaController');


router.get("/factura", function (req, res) {
  res.json({ mensaje: "¡Hola Mundo!" });
});


router.get('/factura', getAllFacturas);
router.post('/factura', createFactura);

module.exports = router;
