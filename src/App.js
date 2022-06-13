import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Homepage from './pages/Homepage';
import "bootstrap/dist/css/bootstrap.min.css"
import LoginSignup from './pages/LoginSignup';
import Post from './pages/Post';
import Layout from './helper/Layout';
import Auth from './helper/Auth';
import Category from './pages/Category';
import CreatePost from './pages/CreatePost';
import Search from './pages/Search';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>

          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/signup' element={<LoginSignup />} />
          <Route path='/posts/:id' element={<Post />} />
          <Route path='/category/:category' element={<Category />} />
          <Route path='/search/:searchterm' element={<Search />} />


          {/* protected routes starts here */}
          <Route element={<Auth />}>
          <Route path='/create-post' element={<CreatePost />} />
          </Route>
          {/* protected routes ends here */}
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
