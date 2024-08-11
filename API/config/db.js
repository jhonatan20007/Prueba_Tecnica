const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Facturate', 'wsigef', '4365sde', {
    host: 'DESKTOP-SN1Q6CQ',
    dialect: 'mssql',
    dialectOptions: {
        options: {
            encrypt: false,
            trustServerCertificate: true,
            requestTimeout: 30000 // 30 segundos de timeout
        }
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize.authenticate()
    .then(() => {
        console.log('Conexión a la base de datos exitosa.');
    })
    .catch(err => {
        console.error('No se pudo conectar a la base de datos:', err);
    });

module.exports = sequelize; 
