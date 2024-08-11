const Cliente = require('../models/clienteModelo');

exports.getAllCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findAll();
        res.status(200).json(cliente);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener Cliente' });
    }
};

exports.createCliente = async (req, res) => {
    try {
        const cliente = await Cliente.create(req.body);
        res.status(201).json(cliente);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear Cliente' });
    }
};