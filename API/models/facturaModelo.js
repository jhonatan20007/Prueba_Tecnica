const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');


const Factura = sequelize.define('Factura', {
    id_factura: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    producto: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    descuento: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    iva: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    valor_total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  }, {
    tableName: 'Facturas',
    timestamps: false,
  });
  
  module.exports = Factura;