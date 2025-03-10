import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const UserManagement = ({ onClose }) => { // Acepta la prop onClose
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [grupoFuncionalId, setGrupoFuncionalId] = useState('');
    const [gruposFuncionales, setGruposFuncionales] = useState([]);

    // Obtener los grupos funcionales al cargar el componente
    useEffect(() => {
        axios.get('http://localhost:5000/api/grupos')
            .then(response => setGruposFuncionales(response.data))
            .catch(error => console.error(error));
    }, []);

    // Manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/usuarios', {
            nombre,
            email,
            grupo_funcional_id: grupoFuncionalId
        })
        .then(response => {
            alert('Usuario creado exitosamente');
            setNombre('');
            setEmail('');
            setGrupoFuncionalId('');
            onClose(); // Cierra el diálogo después de crear el usuario
        })
        .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
            />
            <FormControl fullWidth margin="normal">
                <InputLabel>Grupo Funcional</InputLabel>
                <Select
                    value={grupoFuncionalId}
                    onChange={(e) => setGrupoFuncionalId(e.target.value)}
                >
                    {gruposFuncionales.map(grupo => (
                        <MenuItem key={grupo.id} value={grupo.id}>
                            {grupo.nombre}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button type="submit" variant="contained" color="primary">
                Crear Usuario
            </Button>
        </form>
    );
};

export default UserManagement;