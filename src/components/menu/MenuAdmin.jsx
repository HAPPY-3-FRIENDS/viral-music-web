import React from 'react'
import MenuLogout from '../../asset/Menu_Logout.png';
import MenuUser from '../../asset/Menu_User.png';
import '../../style/Menu.css'

function MenuAdmin() {
  return (
    <div>
        <div className='menu-user-container'>
            <img className='menu-icon' src={MenuUser} alt=""/>
            <img className='menu-icon' src={MenuLogout} alt=""/>
        </div>
    </div>
  )
}

export default MenuAdmin