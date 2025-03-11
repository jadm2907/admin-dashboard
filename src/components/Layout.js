import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Container, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Ícono para el botón de menú
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    const [drawerOpen, setDrawerOpen] = useState(false); // Estado para controlar la visibilidad del Drawer

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <div style={{ display: 'flex' }}>
            {/* AppBar */}
            <AppBar position="fixed" style={{ zIndex: 1201 }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={toggleDrawer}
                        sx={{ mr: 2, display: { sm: 'none' } }} // Solo visible en móviles
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap style={{ flexGrow: 1 }}>
                        Admin Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Drawer (Menú lateral) */}
            <Drawer
                variant="temporary" // Cambia a "temporary" para móviles
                open={drawerOpen}
                onClose={toggleDrawer}
                sx={{
                    width: 240,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                    },
                    display: { xs: 'block', sm: 'none' }, // Solo visible en móviles
                }}
            >
                <Toolbar /> {/* Espacio para el AppBar */}
                <List>
                    {/* Enlace a la página de inicio */}
                    <ListItem button component={Link} to="/" onClick={toggleDrawer}>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary="Inicio" />
                    </ListItem>

                    {/* Enlace a la gestión de pacientes */}
                    <ListItem button component={Link} to="/manage-patients" onClick={toggleDrawer}>
                        <ListItemIcon><PeopleIcon /></ListItemIcon>
                        <ListItemText primary="Gestionar Pacientes" />
                    </ListItem>

                    {/* Enlace a la gestión de recursos humanos */}
                    <ListItem button component={Link} to="/manage-hr" onClick={toggleDrawer}>
                        <ListItemIcon><WorkIcon /></ListItemIcon>
                        <ListItemText primary="Gestionar Recursos Humanos" />
                    </ListItem>

                    {/* Enlace a la creación de usuarios */}
                    <ListItem button component={Link} to="/create-user" onClick={toggleDrawer}>
                        <ListItemIcon><AccessibilityIcon /></ListItemIcon>
                        <ListItemText primary="Crear Usuario" />
                    </ListItem>

                    {/* Enlace a la lista de usuarios */}
                    <ListItem button component={Link} to="/user-list" onClick={toggleDrawer}>
                        <ListItemIcon><FormatListNumberedIcon /></ListItemIcon>
                        <ListItemText primary="Lista de Usuarios" />
                    </ListItem>
                </List>
            </Drawer>

            {/* Drawer permanente para pantallas grandes */}
            <Drawer
                variant="permanent"
                sx={{
                    width: 240,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                    },
                    display: { xs: 'none', sm: 'block' }, // Solo visible en pantallas grandes
                }}
            >
                <Toolbar /> {/* Espacio para el AppBar */}
                <List>
                    {/* Enlace a la página de inicio */}
                    <ListItem button component={Link} to="/">
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary="Inicio" />
                    </ListItem>

                    {/* Enlace a la gestión de pacientes */}
                    <ListItem button component={Link} to="/manage-patients">
                        <ListItemIcon><PeopleIcon /></ListItemIcon>
                        <ListItemText primary="Gestionar Pacientes" />
                    </ListItem>

                    {/* Enlace a la gestión de recursos humanos */}
                    <ListItem button component={Link} to="/manage-hr">
                        <ListItemIcon><WorkIcon /></ListItemIcon>
                        <ListItemText primary="Gestionar Recursos Humanos" />
                    </ListItem>

                    {/* Enlace a la creación de usuarios */}
                    <ListItem button component={Link} to="/create-user">
                        <ListItemIcon><AccessibilityIcon /></ListItemIcon>
                        <ListItemText primary="Crear Usuario" />
                    </ListItem>

                    {/* Enlace a la lista de usuarios */}
                    <ListItem button component={Link} to="/user-list">
                        <ListItemIcon><FormatListNumberedIcon /></ListItemIcon>
                        <ListItemText primary="Lista de Usuarios" />
                    </ListItem>
                </List>
            </Drawer>

            {/* Main Content */}
            <main style={{ flexGrow: 1, padding: '24px', marginTop: '64px' }}>
                <Container maxWidth="lg" sx={{ padding: { xs: 2, sm: 3, md: 4 } }}>
                    {children}
                </Container>
            </main>
        </div>
    );
};

export default Layout;