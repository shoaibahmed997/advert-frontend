import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Homepage from './pages/Homepage';
import "bootstrap/dist/css/bootstrap.min.css"
import LoginSignup from './pages/LoginSignup';
import Post from './pages/Post';
import { AnimatePresence } from 'framer-motion';


function App() {
  return (
    <AnimatePresence exitBeforeEnter>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<LoginSignup />} />
        <Route path='/signup' element={<LoginSignup />} />
        <Route path='/posts/:id' element={<Post />} />

      </Routes>
    </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
