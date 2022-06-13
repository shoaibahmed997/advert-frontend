import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Homepage from './pages/Homepage';
import "bootstrap/dist/css/bootstrap.min.css"
import LoginSignup from './pages/LoginSignup';
import Post from './pages/Post';
import Layout from './helper/Layout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>

          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/signup' element={<LoginSignup />} />
          <Route path='/posts/:id' element={<Post />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
