import{

  LayoutDashboard ,
  FolderKanban , Sparkles , BriefcaseBusiness ,GraduationCap , GitCompareArrows , MessageSquareMore , User , Settings , Moon , Sun, ToggleRight
   , 
  ToggleLeft
} from 'lucide-react';
import  Image  from '../assets/imgg.jpg';
import { useState } from 'react';

function Sidebar() {
  const [darkMood, setdarkMood] = useState(false)
    const [ActiveItem, setActiveItem] = useState("Overview")
    const menuItems = [
  { name: "Overview", icon: LayoutDashboard },
  { name: "Projects", icon: FolderKanban },
  { name: "Skills", icon: Sparkles },
  { name: "Experience", icon: BriefcaseBusiness },
  { name: "Education", icon: GraduationCap },
  { name: "GitHub Stats", icon: GitCompareArrows },
  { name: "Messages", icon: MessageSquareMore },
  { name: "Profile", icon: User },
  { name: "Settings", icon: Settings },
];
  return (
    <aside className="w-72 min-h-screen bg-slate-900 text-white p-6">

  <h1 className="text-2xl font-bold mb-8">
    DevPortfolio
  </h1>
<nav className="flex flex-col gap-2">
  {menuItems.map((item, index) => {
    const Icon = item.icon;

    return (
      <button
      onClick={() => setActiveItem(item.name)}
        key={item.name}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left ${
          item.name === ActiveItem
            ? "bg-purple-600"
            : "hover:bg-slate-800"
        }`}
      >
        <Icon size={20} />
        <span>{item.name}</span>
      </button>
    );
  })}
</nav>
<div className=' mb-2 items-center gap-2 px-4 py-3'>

<div className='flex  bg-slate-800 content-center items-center gap-3 px-4 py-3 rounded-lg text-nowrap'>
  

<button
onClick={()=> setdarkMood(!darkMood)}
className='cursor-pointer flex content-center gap-2'
>
  <span>
  {darkMood ? <Moon /> : <Sun />}
</span>
  Dark Mood</button>
  
  <span>
  {darkMood ? <ToggleLeft /> : <ToggleRight />}
</span>

</div>
    <div className='flex  bg-slate-800 rounded-lg p-2 items-center gap-4 mt-3'>

  <img
  src={Image}
  alt="Faizan Ahmad"
  className="w-10 h-10 rounded-full object-cover"
/>

<div className='text-nowrap'>
  <h1 className='text-2xl'>Faizan Ahmad</h1>

  <p>Web Developer</p>
  <p className='flex  items-center gap-2'>
    <span className='w-2
h-2
rounded-full
bg-green-400'></span>
    Online</p>
</div>
</div>
</div>

</aside>

  );
}

export default Sidebar;