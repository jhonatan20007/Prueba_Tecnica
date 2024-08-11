const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Asegúrate de que la ruta al archivo de configuración es correcta

const Cliente = sequelize.define('Cliente', {
    id_cliente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    tipo_identificacion: {
        type: DataTypes.STRING(50), // Cambié la longitud a 50 para coincidir con la base de datos
        allowNull: false,
    },
    numero_identificacion: {
        type: DataTypes.STRING(50), // Cambié la longitud a 50 para coincidir con la base de datos
        allowNull: false,
        unique: true, // Especificar que este campo debe ser único
    },
    observaciones: {
        type: DataTypes.TEXT, // Cambié a TEXT para coincidir con la base de datos
        allowNull: true,
    }
}, {
    tableName: 'Clientes', // Asegúrate de que el nombre coincide exactamente con el de la base de datos
    timestamps: false,
});

module.exports = Cliente;
