import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CreateUser from './pages/CreateUser';
import UserList from './pages/UserList';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create-user" element={<CreateUser />} />
                    <Route path="/user-list" element={<UserList />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;