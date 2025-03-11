import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CreateUser from './pages/CreateUser';
import UserList from './pages/UserList';
import ManagePatients from './pages/ManagePatients'; // Importa el componente ManagePatients
import ManageHR from './pages/ManageHR'; // Importa el componente ManageHR

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create-user" element={<CreateUser />} />
                    <Route path="/user-list" element={<UserList />} />
                    <Route path="/manage-patients" element={<ManagePatients />} /> {/* Ruta para Manage Patients */}
                    <Route path="/manage-hr" element={<ManageHR />} /> {/* Ruta para Manage HR */}
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;