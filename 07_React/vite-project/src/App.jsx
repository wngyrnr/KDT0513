import { useState } from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Home from './pages/Home'
import PostListPage from './pages/PostListPage'; 
import EditPostPage from './pages/EditPostPage';
import NewPostPage from './pages/NewPostPage';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/posts' element={<PostListPage />}/>
          <Route path='/posts/:id/edit' element={<EditPostPage />}/>
          <Route path='/posts/new' element={<NewPostPage />}/>
          <Route path='*' element={<Home />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
