const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 5000;

// Configuración de la conexión a PostgreSQL
const pool = new Pool({
    user: 'postgres', // Cambia por tu usuario de PostgreSQL
    host: 'localhost',
    database: 'prueba',
    password: 'postgres', // Cambia por tu contraseña de PostgreSQL
    port: 5432,
});

// Middleware
app.use(cors());
app.use(express.json());

// Ruta para obtener todos los grupos funcionales
app.get('/api/grupos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM grupos_funcionales');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener los grupos funcionales');
    }
});

// Ruta para crear un nuevo usuario
app.post('/api/usuarios', async (req, res) => {
    const { nombre, email, grupo_funcional_id } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO usuarios (nombre, email, grupo_funcional_id) VALUES ($1, $2, $3) RETURNING *',
            [nombre, email, grupo_funcional_id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al crear el usuario');
    }
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor backend corriendo en http://localhost:${port}`);
});