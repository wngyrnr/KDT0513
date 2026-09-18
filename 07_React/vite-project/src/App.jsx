import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'

//BrowserRouter : 라우터의 최상위 컴포넌트(html의 history api를 활용해서 url변경)
//Routes : 현재 브라우저 주소창의 URL과 가장 일치하는 하위 route를 찾아서 렌더링

function App() {

  return (
    <BrowserRouter>
      <nav style={{marginBottom: 20}}>
        <Link to="/" style={{marginRight: 10}}>홈</Link>
        <Link to="/about" style={{marginRight: 10}}>소개</Link>
        <Link to="/profile/김개똥">김개똥프로필</Link>
      </nav>
      {/* 라우트설정 */}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/profile/:username' element={<Profile />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
