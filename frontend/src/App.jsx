import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Write from './pages/write/Write';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Single from './pages/single/Single';
import Setting from './pages/setting/Setting';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Post from './components/post/Post';
import SinglePost from './components/singlepost/SinglePost';

import React from 'react';

const App = () => {
  const user = false;
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Home /> : <Write />} />
        <Route path="/setting" element={user ? <Home /> : <Setting />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
};

export default App;
