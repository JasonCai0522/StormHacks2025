import logo from './logo.svg';
import './App.css';


// Will stay on page
import Header from './Header';
import Nav from "./Nav";

import Home from './Home';
//import NewPost from './NewPost';
//import PostPage from './PostPage';
import About from './About';
//import Missing from './Missing';
import Login from './Login'
import Register from './Register'
import MainScreen from './MainScreen';
import Sidebar from './Sidebar';
import Entry from './Entry';
import Coaches from  './Coaches';
import Checklist from './Checklist';
import Timeline from './Timeline';

import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

            {/* Private routes */}
            <Route
              path="/mainScreen"
              element={isLoggedIn ? <MainScreen isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> : <Login setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route path="/entry" element={isLoggedIn ? <Entry /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/timeline" element={isLoggedIn ? <Timeline /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/coaches" element={isLoggedIn ? <Coaches /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/checklist" element={isLoggedIn ? <Checklist /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
