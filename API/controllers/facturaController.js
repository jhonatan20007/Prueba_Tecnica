const Factura = require('../models/facturaModelo');

exports.getAllFacturas = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener usuarios' });
    }
};

exports.createFactura = async (req, res) => {
    try {
        const { precio, descuento, producto } = req.body;
        const porcentajeIVA = 0.19; // 19% de IVA

        // Calcular el valor del descuento y el IVA
        const valorDescuento = precio * (descuento / 100);
        const valorConDescuento = precio - valorDescuento;
        const valorIVA = valorConDescuento * porcentajeIVA;
        const valorTotal = valorConDescuento + valorIVA;

        // Crear la factura con los valores calculados
        const factura = await Factura.create({
            id_cliente: req.body.id_cliente,
            fecha: req.body.fecha,
            producto: producto,
            precio: precio,
            descuento: valorDescuento,
            iva: valorIVA,
            valor_total: valorTotal,
        });

        res.status(201).json(factura);
    } catch (error) {
        console.error('Error al crear factura:', error);
        res.status(500).json({ message: 'Error al crear factura' });
    }
};
