import React, { useContext, useState } from 'react'
import { assets, songsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { PlayerContext } from '../context/PlayerContext'

const Navbar = () => {

  const {setShowSongsOnly} = useContext(PlayerContext);

    const navigate = useNavigate();





      const [activeTab, setActiveTab] = useState('all'); 

  const handleAllClick = () => {
    setActiveTab('all');
    setShowSongsOnly(false);
  }

  const handleMusicClick = () => {
    setActiveTab('music');
    setShowSongsOnly(true);
  }
  return (
    <>
    <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
             <img onClick={()=> navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer ' src={assets.arrow_left} alt="" />
            <img onClick={()=> navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer ' src={assets.arrow_right} alt="" />

        </div>
        <div className='flex items-center gap-4'>
            <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
            <p  className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer  hover:bg-white hover:text-black'>Install App</p>
            <p className='bg-purple-500 w-7 h-7 rounded-full text-black flex items-center justify-center '>N</p>
        </div>
    </div>

    <div className='flex items-center gap-2 mt-4 '>
        <p 
        onClick={handleAllClick}
         className={`px-4 py-1 rounded-2xl cursor-pointer ${activeTab === 'all' ? 'bg-white text-black' : 'bg-black text-white hover:bg-white hover:text-black'   }`}
         >All
          </p>
        <p 
        onClick={handleMusicClick}
         className={`px-4 py-1 rounded-2xl cursor-pointer '   ${activeTab === 'music' ? 'bg-white text-black' : 'bg-black text-white hover:bg-white hover:text-black'   }`}>Music
          
         
         </p>


        <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer hover:bg-white hover:text-black'>Podcasts</p>


    </div>
    

    
    
    
    
    
    </>
  )
}

export default Navbar