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

// Rutas para grupos funcionales
app.get('/api/grupos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM grupos_funcionales');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener los grupos funcionales');
    }
});

// Rutas para usuarios
app.get('/api/usuarios', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM usuarios');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener los usuarios');
    }
});

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

// Rutas para pacientes (nuevas rutas)
app.get('/api/pacientes', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM pacientes');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener los pacientes');
    }
});

app.post('/api/pacientes', async (req, res) => {
    const {
        nombre,
        apellido,
        rut,
        genero,
        direccion,
        telefono,
        email,
        apoderado,
        parentesco,
        direccion_apoderado,
        telefono_apoderado,
        fecha_internacion,
        fecha_alta
    } = req.body;

    // Validar campos de fecha
    const fechaInternacionValida = fecha_internacion || null;
    const fechaAltaValida = fecha_alta || null;


    try {
        const result = await pool.query(
            `INSERT INTO pacientes (
                nombre, apellido, rut, genero, direccion, telefono, email,
                apoderado, parentesco, direccion_apoderado, telefono_apoderado,
                fecha_internacion, fecha_alta
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *`,
            [
                nombre,
                apellido,
                rut,
                genero,
                direccion,
                telefono,
                email,
                apoderado,
                parentesco,
                direccion_apoderado,
                telefono_apoderado,
                fecha_internacion,
                fecha_alta
            ]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al crear el paciente');
    }
});

app.put('/api/pacientes/:id', async (req, res) => {
    const { id } = req.params;
    const {
        nombre,
        apellido,
        rut,
        genero,
        direccion,
        telefono,
        email,
        apoderado,
        parentesco,
        direccion_apoderado,
        telefono_apoderado,
        fecha_internacion,
        fecha_alta
    } = req.body;

    try {
        const result = await pool.query(
            `UPDATE pacientes SET
                nombre = $1,
                apellido = $2,
                rut = $3,
                genero = $4,
                direccion = $5,
                telefono = $6,
                email = $7,
                apoderado = $8,
                parentesco = $9,
                direccion_apoderado = $10,
                telefono_apoderado = $11,
                fecha_internacion = $12,
                fecha_alta = $13
            WHERE id = $14 RETURNING *`,
            [
                nombre,
                apellido,
                rut,
                genero,
                direccion,
                telefono,
                email,
                apoderado,
                parentesco,
                direccion_apoderado,
                telefono_apoderado,
                fecha_internacion,
                fecha_alta,
                id
            ]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al actualizar el paciente');
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor backend corriendo en http://localhost:${port}`);
});