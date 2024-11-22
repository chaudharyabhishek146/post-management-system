import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Home } from './components/home';
import { PostForm } from './components/postform';
import Dashboard from './components/dashboard/dashboard';


function App() {

  return (
    <Router>
    <Dashboard />

    <Container sx={{ mt: 4 }}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<PostForm />} />
        <Route path="/" element={<Navigate to="/home"  />} />
      </Routes>
    </Container>
  </Router>
  );
}

export default App;
