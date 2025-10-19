import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import Home from './pages/Home';
import { Courses } from './pages/Cours';
import About from './pages/About';
import { Contact } from './pages/Contact';
import Login from './pages/Login';
import { Exercise } from './pages/Exercise';
import Competition from './pages/Competition';
import ExerciseResult from './pages/Exercise1';
import Exercise2 from './pages/Exercise2';
import Exercise3 from './pages/Exercise3';
import Exercise4 from './pages/Exercise4';
import Exercise5 from './pages/Exercise5';
import Exercise6 from './pages/Exercise6';
import Exercise7 from './pages/Exercise7';
import Exercise8 from './pages/Exercise8';
import Exercise9 from './pages/Exercise9';
import Footer from './components/Footer';


function AppWrapper() {
  const location = useLocation();
  const hideNav = location.pathname === '/login';

  return (
    <div className={"min-h-screen bg-neutral-50 " + (hideNav ? '' : 'app-with-sidebar')}>
      {!hideNav && <Navigation />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
            <Route path="/exercises" element={<Exercise />} />
            <Route path="/exercises/3" element={<Exercise3 />} />
            <Route path="/exercises/result" element={<ExerciseResult />} />
            <Route path="/exercises/2" element={<Exercise2 />} />
            <Route path="/exercises/4" element={<Exercise4 />} />
            <Route path="/exercises/5" element={<Exercise5 />} />
            <Route path="/exercises/6" element={<Exercise6 />} />
            <Route path="/exercises/7" element={<Exercise7 />} />
            <Route path="/exercises/8" element={<Exercise8 />} />
            <Route path="/exercises/9" element={<Exercise9 />} />
        <Route path="/about" element={<About />} />
  <Route path="/competitions" element={<Competition />} />
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
      <Footer />
    </Router>
  );
}

export default App;