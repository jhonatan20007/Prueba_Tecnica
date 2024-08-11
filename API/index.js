const express = require('express');
const app = express();
const sequelize = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const facturaRoutes = require('./routes/facturaRoutes');
const clienteRoutes = require('./routes/clienteRoutes');

const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rutas
app.use('/api', userRoutes);
app.use('/api', facturaRoutes);
app.use('/api', clienteRoutes);



// Sincronizar la base de datos y luego iniciar el servidor
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
}).catch(error => {
    console.error('Error al sincronizar la base de datos:', error);
});
