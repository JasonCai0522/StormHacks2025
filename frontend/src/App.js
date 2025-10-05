// App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Header from './Header';
import Nav from "./Nav";

import Home from './Home';
import About from './About';
import Login from './Login';
import Register from './Register';
import MainScreen from './MainScreen';
import Sidebar from './Sidebar';
import Entry from './Entry';
import Coaches from './Coaches';
import Checklist from './Checklist';
import Timeline from './Timeline';

import ProtectedRoute from './ProtectedRoute'; // ⬅️ Import the component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 🔁 Sync login state with localStorage
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setIsLoggedIn(!!token);

    const loggedIn = !!token; 
    setIsLoggedIn(loggedIn);
  
    console.log("🔐 User login state:", loggedIn);
    console.log("🪪 Token from localStorage:", token);
  }, []);

  return (
     <div className="App">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Nav />

      <div className="main-container">
        {/* Sidebar only visible when logged in */}
        {isLoggedIn && <Sidebar />}

        {/* Main content area */}
        <div className={`entry ${isLoggedIn ? "with-sidebar" : "fullscreen"}`}>
        <Routes>
  {/* Public routes */}
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
  <Route path="/register" element={<Register />} />

  {/* Protected routes */}
  <Route
    path="/mainScreen"
    element={
      <ProtectedRoute>
        <MainScreen isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </ProtectedRoute>
    }
  />
  <Route
    path="/entry"
    element={
      <ProtectedRoute>
        <Entry />
      </ProtectedRoute>
    }
  />
  <Route
    path="/timeline"
    element={
      <ProtectedRoute>
        <Timeline />
      </ProtectedRoute>
    }
  />
  <Route
    path="/coaches"
    element={
      <ProtectedRoute>
        <Coaches />
      </ProtectedRoute>
    }
  />
  <Route
    path="/checklist"
    element={
      <ProtectedRoute>
        <Checklist />
      </ProtectedRoute>
    }
  />
</Routes>
        </div>
      </div>
    </div>
  );
}

export default App;



/*
localStorage.removeItem('accessToken');
setIsLoggedIn(false);
navigate('/login');
*/