import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Box } from '@mui/material';

const ManagePatients = () => {
    const [patients, setPatients] = useState([]);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [rut, setRut] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState(''); // Nueva variable de estado
    const [genero, setGenero] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [apoderado, setApoderado] = useState('');
    const [parentesco, setParentesco] = useState('');
    const [direccionApoderado, setDireccionApoderado] = useState('');
    const [telefonoApoderado, setTelefonoApoderado] = useState('');
    const [fechaInternacion, setFechaInternacion] = useState('');
    const [fechaAlta, setFechaAlta] = useState('');

    // Obtener la lista de pacientes
    useEffect(() => {
        axios.get('http://localhost:5000/api/pacientes')
            .then(response => setPatients(response.data))
            .catch(error => console.error(error));
    }, []);

    // Crear un nuevo paciente
    const handleCreatePatient = () => {
        if (!fechaInternacion || !fechaAlta) {
            alert("Las fechas de internación y alta son obligatorias.");
         return;
        }
        axios.post('http://localhost:5000/api/pacientes', {
            nombre,
            apellido,
            rut,
            fecha_nacimiento: fechaNacimiento, // Incluir fecha de nacimiento
            genero,
            direccion,
            telefono,
            email,
            apoderado,
            parentesco,
            direccion_apoderado: direccionApoderado,
            telefono_apoderado: telefonoApoderado,
            fecha_internacion: fechaInternacion,
            fecha_alta: fechaAlta,
        })
        .then(response => {
            alert('Paciente creado exitosamente');
            setPatients([...patients, response.data]);
        })
        .catch(error => console.error(error));
    };

    return (
        <Box sx={{ flexGrow: 1, padding: 3 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1>Gestionar Pacientes</h1>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} fullWidth margin="normal" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} fullWidth margin="normal" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="RUT" value={rut} onChange={(e) => setRut(e.target.value)} fullWidth margin="normal" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="Fecha de Nacimiento" type="date" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} fullWidth margin="normal" InputLabelProps={{ shrink: true }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="Género" value={genero} onChange={(e) => setGenero(e.target.value)} fullWidth margin="normal" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="Dirección" value={direccion} onChange={(e) => setDireccion(e.target.value)} fullWidth margin="normal" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} fullWidth margin="normal" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth margin="normal" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="Apoderado" value={apoderado} onChange={(e) => setApoderado(e.target.value)} fullWidth margin="normal" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="Parentesco" value={parentesco} onChange={(e) => setParentesco(e.target.value)} fullWidth margin="normal" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="Dirección Apoderado" value={direccionApoderado} onChange={(e) => setDireccionApoderado(e.target.value)} fullWidth margin="normal" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="Teléfono Apoderado" value={telefonoApoderado} onChange={(e) => setTelefonoApoderado(e.target.value)} fullWidth margin="normal" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="Fecha de Internación" type="date" value={fechaInternacion} onChange={(e) => setFechaInternacion(e.target.value)} fullWidth margin="normal" InputLabelProps={{ shrink: true }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="Fecha de Alta" type="date" value={fechaAlta} onChange={(e) => setFechaAlta(e.target.value)} fullWidth margin="normal" InputLabelProps={{ shrink: true }} />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={handleCreatePatient}>
                        Crear Paciente
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell>Apellido</TableCell>
                                    <TableCell>RUT</TableCell>
                                    <TableCell>Fecha de Nacimiento</TableCell> {/* Nueva columna */}
                                    <TableCell>Género</TableCell>
                                    <TableCell>Dirección</TableCell>
                                    <TableCell>Teléfono</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Apoderado</TableCell>
                                    <TableCell>Parentesco</TableCell>
                                    <TableCell>Dirección Apoderado</TableCell>
                                    <TableCell>Teléfono Apoderado</TableCell>
                                    <TableCell>Fecha de Internación</TableCell>
                                    <TableCell>Fecha de Alta</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {patients.map(patient => (
                                    <TableRow key={patient.id}>
                                        <TableCell>{patient.nombre}</TableCell>
                                        <TableCell>{patient.apellido}</TableCell>
                                        <TableCell>{patient.rut}</TableCell>
                                        <TableCell>{patient.fecha_nacimiento}</TableCell> {/* Mostrar fecha de nacimiento */}
                                        <TableCell>{patient.genero}</TableCell>
                                        <TableCell>{patient.direccion}</TableCell>
                                        <TableCell>{patient.telefono}</TableCell>
                                        <TableCell>{patient.email}</TableCell>
                                        <TableCell>{patient.apoderado}</TableCell>
                                        <TableCell>{patient.parentesco}</TableCell>
                                        <TableCell>{patient.direccion_apoderado}</TableCell>
                                        <TableCell>{patient.telefono_apoderado}</TableCell>
                                        <TableCell>{patient.fecha_internacion}</TableCell>
                                        <TableCell>{patient.fecha_alta}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ManagePatients;