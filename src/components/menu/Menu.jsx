import React from 'react'
import MenuChart from '../../asset/Menu_Chart.png';
import MenuHome from '../../asset/Menu_Home.png';
import MenuPlaylist from '../../asset/Menu_Playlist.png';
import MenuLogout from '../../asset/Menu_Logout.png';
import MenuUser from '../../asset/Menu_User.png';
import '../../style/Menu.css'

function Menu() {
  return (
    <div>
        <div className='menu-container'>
            <img className='menu-icon' src={MenuHome} alt=""/>
            <img className='menu-icon' src={MenuPlaylist} alt=""/>
            <img className='menu-icon' src={MenuChart} alt=""/>
        </div>
        <div className='menu-user-container'>
            <img className='menu-icon' src={MenuUser} alt=""/>
            <img className='menu-icon' src={MenuLogout} alt=""/>
        </div>
    </div>
  )
}

export default Menu