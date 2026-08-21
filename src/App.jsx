import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Overview from './Pages/Overview'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'
import Experience from './Pages/Experience'
import Education from './Pages/Education'
import GithubStats from './Pages/GithubStats'
import Messages from './Pages/Messages'
import Profile from './Pages/Profile'
import Settings from './Pages/Settings'

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