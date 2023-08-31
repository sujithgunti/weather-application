import React, { useState } from 'react'
import { UilSearch } from '@iconscout/react-unicons'
function Inputs({setQuery,setUnits}) {
    const[city,setCity]=useState("");
    const handleSearchClick=()=>{
        if(city!==''){
            setQuery({q:city})
        }
    }

    return (
        <div className="flex flex-row justify-center my-6">
            <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
                <input type="text" value={city} onChange={(e)=>setCity(e.currentTarget.value)} placeholder="search for city" className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase " />
                <UilSearch size={25} onClick={handleSearchClick} className="text-white cursor-pointer transition ease-out hover:scale-125" />
            </div>

            <div className="flex flex-row w-1/4 items-center justify-center">
                <button name="cen" className="text-xl text-white font-light">°C</button>
                <p className="text-xl text-white font-light mx-1 ">|</p>
                <button name="far" className="text-xl text-white font-light">°F</button>
            </div>
        </div>


    )
}

export default Inputs