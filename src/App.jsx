import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar'
import Navbar from './components/Navbar'
import Overview from './pages/Overview'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Education from './pages/Education'
import GithubStats from './pages/GithubStats'
import Messages from './pages/Messages'
import Profile from './pages/Profile'
import Settings from './pages/Settings'

function App() {
  return (
    <BrowserRouter>
      <div className='flex bg-slate-950'>
        <Sidebar />
        <main className='flex-1 p-6'>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/github-stats" element={<GithubStats />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App