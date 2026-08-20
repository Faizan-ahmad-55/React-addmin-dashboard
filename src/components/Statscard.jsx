import { CodeXml , BriefcaseBusiness, Sparkles, MailQuestionMarkIcon } from 'lucide-react'
import React from 'react'

function Statscard() {
    const Stats = [
        {
            title: "Total Projects",
            value: "15",
            subtitle: "+2 this month",
            icon:<CodeXml className='text-white size-15 bg-blue-600 p-5 rounded-lg '/>
        },
        {
            title: "Experience",
            value: "2.5",
            subtitle: "Years",
            icon:<BriefcaseBusiness className='text-white size-15 bg-green-600 p-5 rounded-lg '/>

        },
        {
            title: "Skills",
            value: "5",
            subtitle: "Technologies",
            icon:<Sparkles className='text-white size-15 bg-orange-500 p-5 rounded-lg '/>
            
        },
        {
            title: "Messages",
            value: "5",
            subtitle: "Unread Messages",
            icon:<MailQuestionMarkIcon className='text-white size-15 bg-purple-600 p-5 rounded-lg '/>

        }
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-4 '>
            {Stats.map((stat, index) => (
                <div
                className='bg-slate-800 p-5 flex gap-5 rounded-lg items-center'
                key={index}>
                    <div >{stat.icon}</div>
                    <div className='text-nowrap text-gray-300'>
                     <p>{stat.title}</p>
                    <strong className='text-white text-2xl'>{stat.value}</strong>
                    <p>{stat.subtitle}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Statscard