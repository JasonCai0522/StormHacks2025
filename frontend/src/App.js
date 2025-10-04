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

import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
