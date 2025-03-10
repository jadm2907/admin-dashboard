import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div style={{ display: 'flex' }}>
            {/* AppBar */}
            <AppBar position="fixed" style={{ zIndex: 1201 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap style={{ flexGrow: 1 }}>
                        Admin Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Drawer */}
            <Drawer
                variant="permanent"
                style={{ width: 240, flexShrink: 0 }}
            >
                <Toolbar /> {/* Espacio para el AppBar */}
                <List>
                    {/* Enlaces a las diferentes secciones */}
                    <ListItem button component={Link} to="/">
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary="Inicio" />
                    </ListItem>
                    <ListItem button component={Link} to="/create-user">
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary="Crear Usuario" />
                    </ListItem>
                    <ListItem button component={Link} to="/user-list">
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary="Lista de Usuarios" />
                    </ListItem>
                </List>
            </Drawer>

            {/* Main Content */}
            <main style={{ flexGrow: 1, padding: '24px', marginTop: '64px' }}>
                {children}
            </main>
        </div>
    );
};

export default Layout;