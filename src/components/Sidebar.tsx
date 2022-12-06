import React, { useState } from 'react'
import './Sidebar.css'
import { BiHomeAlt } from 'react-icons/bi'
import { CiMoneyBill } from 'react-icons/ci'
import { GiSwipeCard } from 'react-icons/gi'
import { IoCardOutline } from 'react-icons/io5'

const Sidebar = () => {
  const [mini, setMini] = useState(true)
  return (
    <div
      className={mini ? 'mini sidebar' : 'sidebar'}
      onMouseOver={() => {
        setMini((prevMini) => !prevMini)
      }}
      onMouseOut={() => {
        setMini((prevMini) => !prevMini)
      }}
    >
      <a href='/'>
        <span className='material-symbols-outlined'>
          <BiHomeAlt />
        </span>
        <span className='icon-text'>Home</span>
      </a>
      <br />

      <a href='/transactions'>
        <span className='material-symbols-outlined'>
          <CiMoneyBill />
        </span>
        <span className='icon-text'>Transactions</span>
      </a>
      <br />

      <a href='#'>
        <span className='material-symbols-outlined'>
          <GiSwipeCard />
        </span>
        <span className='icon-text'>Cards</span>
      </a>
      <br />

      <a href='#'>
        <span className='material-symbols-outlined'>
          <IoCardOutline />
        </span>
        <span className='icon-text'>Users</span>
      </a>
    </div>
  )
}

export default Sidebar
