import { ExternalLink, ClipboardMinus, GitCommitHorizontal, GitPullRequest, Star, FolderPlus, User, Award, Mail, CheckCircle2 } from 'lucide-react'
import React from 'react'
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { subDays, format } from "date-fns";

const RecentStats = () => {
  const activities = [
  {
    title: "New Project Added",
    subtitle: "E-commerce Store",
    time: "2h ago",
    icon: <FolderPlus className='text-white bg-purple-600 rounded-full' />,      
    
  },
  {
    title: "Updated Profile information",
    time: "5h ago",
    icon: <User size={25} className='text-white bg-blue-600 rounded-full' />,      
    
  },
  {
    title: "New skill Added",
    subtitle: "Next.js",
    time: "1d ago",
    icon: <Award size={25} className='text-white bg-green-600 rounded-full' />,      
    
  },
  {
    title: "New message received",
    subtitle: "From John Doe",
    time: "2d ago",
    icon: <Mail size={25} className='text-white bg-orange-400 rounded-full' />,      
    
  },
  {
    title: "Project Completed",
    subtitle: "Portfolio Website",
    time: "3d ago",
    icon: <CheckCircle2 size={25} className='text-white bg-indigo-600 rounded-full' />,      
    
  },

];
  const GitHubStats = [
    { icon: <ClipboardMinus />, total: "89", title: "Repositories" },
    { icon: <GitCommitHorizontal />, total: "512", title: "Commits" },
    { icon: <GitPullRequest />, total: "24", title: "Pull Requests" },
    { icon: <Star />, total: "156", title: "Stars" },
  ]

  const data = [
    {
      title: "Developers Dashboard",
      date: "2026-05-01",
      description: "This is a dashboard for developers to track their progress and stats.",
      tags: ["HTML", "CSS", "JavaScript", "React"],
      image: "https://cdn.dribbble.com/userupload/9798824/file/original-15a8c650321dd0218088606743e86195.png?crop=0x0-4200x3150&resize=1600x1200"
    },
    {
      title: "E-commerce Website",
      date: "2025-10-04",
      description: "This is an e-commerce website for selling products online.",
      tags: ["HTML", "CSS", "JavaScript", "React"],
      image: "https://cdn.dribbble.com/userupload/23744972/file/original-f09ad4491cf30c1628e68083ad7d12ad.jpg?resize=400x0"
    },
    {
      title: "Movie Search website",
      date: "2026-05-01",
      description: "This is a movie search website for finding and browsing movies.",
      tags: ["HTML", "CSS", "JavaScript", "React"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsNt0S2m8uxdxHy0vvVdqhxoOFjbRF1le9ug6ojwV3PmROhuNJiOJojXRv&s=1000"
    }
  ]

  const generateHeatmapData = () => {
    const heatmapData = [];
    for (let i = 0; i < 180; i++) {
      const date = subDays(new Date(), i);
      heatmapData.push({
        date: format(date, "yyyy-MM-dd"),
        count: Math.floor(Math.random() * 5),
      });
    }
    return heatmapData;
  };

  const contributions = generateHeatmapData();
  const totalContributions = contributions.reduce((sum, day) => sum + day.count, 0);

  return (
    <div className='flex rounded-lg mt-4 gap-5'>
      {/* Recent Projects */}
      <div className='bg-slate-800 rounded-lg flex-1'>
        <div className='flex justify-between items-center'>
          <h1 className='font-semibold text-white p-5'>Recent Projects</h1>
        </div>

        {data.map((item, index) => (
          <div key={index} className='flex gap-3 rounded-lg p-4 mt-3'>
            <span className='shrink-0'>
              <img src={item.image} alt={item.title} className='w-20 h-20  object-cover mt-2 rounded-lg' />
            </span>
            <span>
              <div className='flex justify-between items-start min-w-0 flex-1'>
                <h2 className='font-semibold text-white'>{item.title}</h2>
                <span className='flex justify-end text-blue-400 hover:text-blue-300 cursor-pointer'>
                  <ExternalLink />
                </span>
              </div>
              <p className='text-gray-300'>{item.description}</p>
              <div className='flex flex-wrap gap-2 mt-2'>
                {item.tags.map((tag, index) => (
                  <span key={index} className='bg-blue-500 text-white text-xs px-2 py-1 rounded'>
                    {tag}
                  </span>
                ))}
              </div>
            </span>
          </div>
        ))}
      </div>

      {/* GitHub Stats — everything now lives in ONE div */}
      <div className='bg-slate-800 rounded-lg p-5 flex-1'>
        <div className='flex justify-between items-center mb-4'>
          <h1 className='font-semibold text-white'>GitHub Stats</h1>
          <span className='text-blue-400 text-sm cursor-pointer hover:text-blue-300'>View profile</span>
        </div>

        {/* Stats grid */}
        <div className='grid grid-cols-4 gap-2 mb-6'>
          {GitHubStats.map((item, index) => (
            <div key={index} className='flex flex-col items-center justify-center bg-slate-900/40 rounded-lg py-3'>
              <span className='text-blue-400'>{item.icon}</span>
              <h2 className='font-semibold text-white mt-2'>{item.total}</h2>
              <p className='text-gray-400 text-xs text-center'>{item.title}</p>
            </div>
          ))}
        </div>

        {/* Heatmap */}
        <div className='overflow-x-auto'>
          <CalendarHeatmap
            startDate={new Date(new Date().setMonth(new Date().getMonth() - 6))}
            endDate={new Date()}
            values={contributions}
            showWeekdayLabels={true}
            classForValue={(value) => {
              if (!value) return "color-empty";
              return `color-scale-${value.count}`;
            }}
          />
        </div>

        {/* Footer: total + legend */}
        <div className='flex justify-between items-center mt-4'>
          <p className='text-gray-400 text-sm'>{totalContributions.toLocaleString()} Total Contributions</p>
          <div className='flex items-center gap-1 text-gray-400 text-xs'>
            <span>Less</span>
            <span className='w-3 h-3 rounded-sm' style={{ backgroundColor: '#252b3d' }}></span>
            <span className='w-3 h-3 rounded-sm' style={{ backgroundColor: '#0e4429' }}></span>
            <span className='w-3 h-3 rounded-sm' style={{ backgroundColor: '#006d32' }}></span>
            <span className='w-3 h-3 rounded-sm' style={{ backgroundColor: '#26a641' }}></span>
            <span className='w-3 h-3 rounded-sm' style={{ backgroundColor: '#39d353' }}></span>
            <span>More</span>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className=' bg-slate-800 rounded-lg p-5'>
        <h1 className='font-semibold text-white'>Recent Activities</h1>
        <div>
          {activities.map((activity, index) => (
            <div key={index} className='flex items-center gap-3 mt-4'>
              <span>
                {activity.icon}
              </span>
              <div>
                <h2 className='font-semibold text-white'>{activity.title}</h2>
                {activity.subtitle && <p className='text-gray-400 text-sm'>{activity.subtitle}</p>}
              </div>
              <span className='ml-auto text-gray-400 text-sm'>{activity.time}</span>
            </div>
          ))}
        </div>

      </div>
      





      </div>



    
  )
}

export default RecentStats