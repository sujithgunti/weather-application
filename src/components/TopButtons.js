import React from 'react'

function TopButtons({setQuery}) {
    const cities=[
        {
            id:1,
            title: 'london'
        },
        {
            id:2,
            title: 'tokyo'
        },
        {
            id:3,
            title: 'paris'
        },
        {
            id:4,
            title: 'toronto'
        },
    ]
  return (
     <div className="flex items-center justify-around my-6">
        {cities.map((city)=>(
            <button key={city.id} className="text-white text-lg font-medium" onClick={()=>setQuery({q:city.title})}>{city.title}</button>
        ))}
     </div>
  )
}

export default TopButtons