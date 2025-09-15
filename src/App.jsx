import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Courses } from './pages/Cours';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';

function AppWrapper() {
  const location = useLocation();
  const hideNav = location.pathname === '/login';

  return (
    <div className={"min-h-screen bg-neutral-50 " + (hideNav ? '' : 'app-with-sidebar')}>
      {!hideNav && <Navigation />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;