import logo from './logo.svg';
import './App.css';


// Will stay on page
import Header from './Header';
import Nav from "./Nav";
import Footer from "./Footer";

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

      {isLoggedIn && (
        <div style={{ display: "flex" }}>
          <Sidebar />
          <MainScreen />
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/mainScreen"
          element={
            isLoggedIn ? (
              <MainScreen isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route path="/entry" element={<Entry />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/checklist" element={<Checklist />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
