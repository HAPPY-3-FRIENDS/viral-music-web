import { Input } from 'antd'
import React from 'react'
import Logo from '../asset/Logo.png'
import '../style/Header.css'
import {SearchOutlined} from '@ant-design/icons';

function Header() {
  return (
    <div className='header-container'>
        <img className='header-logo' src={Logo} alt="" />
        <Input className='header-search' prefix={<SearchOutlined />} placeholder="Search" />
    </div>
  )
}

export default Header