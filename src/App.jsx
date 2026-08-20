import React from 'react'
import Sidebar from './components/sidebar'
import Navbar from './components/Navbar'
import Welcom from './components/Welcom'
import Statscard from './components/Statscard'
import ChartSection from './components/ChartSection'
import RecentStats from './components/RecentStats'

function App() {
  return (
    <div className='flex  bg-slate-950'>
      <Sidebar />
<main className='flex-1 overflow-y-auto p-6'>
      <Navbar/>
      <Welcom/>
      <Statscard/>
      <ChartSection/>
      <RecentStats/>


</main>




    </div>
  )
}

export default App