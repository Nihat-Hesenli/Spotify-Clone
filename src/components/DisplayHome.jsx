import React, { useContext } from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import { songsData } from '../assets/assets'
import SongItem from './SongItem'
import { PlayerContext } from '../context/PlayerContext'

const DisplayHome = () => {
  const { searchTerm } = useContext(PlayerContext)
  const { showSongsOnly } = useContext(PlayerContext)

  const filteredSongs = songsData.filter(song =>
    song.name.toLowerCase().includes(searchTerm.toLowerCase())
  )



  return (
    <>
      <Navbar />

      {
        !showSongsOnly && (


          <div className='mb-4'>
            <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
            <div className='flex overflow-auto'>
              {albumsData.map((item, index) => (<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />)

              )}
            </div>


          </div>


        )


      }


      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
        <div className='flex overflow-auto'>
          {filteredSongs.map((item, index) => (<SongItem key={index} name={item.name} desc={item.desc} image={item.image} id={index} />))}
        </div>


      </div>



    </>
  )
}

export default DisplayHome