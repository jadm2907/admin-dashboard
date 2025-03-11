import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Box } from '@mui/material';

const ManageHR = () => {
    const [employees, setEmployees] = useState([]);
    const [nombre, setNombre] = useState('');
    const [puesto, setPuesto] = useState('');
    const [salario, setSalario] = useState('');
    const [fechaContratacion, setFechaContratacion] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/recursos-humanos')
            .then(response => setEmployees(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleCreateEmployee = () => {
        axios.post('http://localhost:5000/api/recursos-humanos', {
            nombre,
            puesto,
            salario: parseFloat(salario),
            fecha_contratacion: fechaContratacion
        })
        .then(response => {
            alert('Empleado creado exitosamente');
            setEmployees([...employees, response.data]);
        })
        .catch(error => console.error(error));
    };

    return (
        <Box sx={{ flexGrow: 1, padding: 3 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1>Gestionar Recursos Humanos</h1>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} fullWidth margin="normal" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="Puesto" value={puesto} onChange={(e) => setPuesto(e.target.value)} fullWidth margin="normal" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="Salario" value={salario} onChange={(e) => setSalario(e.target.value)} fullWidth margin="normal" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="Fecha de Contratación" type="date" value={fechaContratacion} onChange={(e) => setFechaContratacion(e.target.value)} fullWidth margin="normal" InputLabelProps={{ shrink: true }} />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={handleCreateEmployee}>
                        Crear Empleado
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell>Puesto</TableCell>
                                    <TableCell>Salario</TableCell>
                                    <TableCell>Fecha de Contratación</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {employees.map(employee => (
                                    <TableRow key={employee.id}>
                                        <TableCell>{employee.nombre}</TableCell>
                                        <TableCell>{employee.puesto}</TableCell>
                                        <TableCell>{employee.salario}</TableCell>
                                        <TableCell>{employee.fecha_contratacion}</TableCell>
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

export default ManageHR;