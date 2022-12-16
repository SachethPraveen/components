import React, { useState } from 'react'
import './Sidebar.css'
import { BiHomeAlt, BiMoney } from 'react-icons/bi'
import { GiSwipeCard } from 'react-icons/gi'
import { IoCardOutline } from 'react-icons/io5'

const Sidebar = (props: { sideClick: (event: any) => void }) => {
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
      <span id='overview' onClick={props.sideClick} className='sideOption'>
        <span className='material-symbols-outlined'>
          <BiHomeAlt />
        </span>
        <span className='icon-text'>Home</span>
      </span>

      <br />

      <span id='transactions' onClick={props.sideClick} className='sideOption'>
        <span className='material-symbols-outlined'>
          <BiMoney />
        </span>
        <span className='icon-text'>Transactions</span>
      </span>
      <br />

      <span id='cards' onClick={props.sideClick} className='sideOption'>
        <span className='material-symbols-outlined'>
          <GiSwipeCard />
        </span>
        <span className='icon-text'>Cards</span>
      </span>
      <br />

      <span id='bins' onClick={props.sideClick} className='sideOption'>
        <span className='material-symbols-outlined'>
          <IoCardOutline />
        </span>
        <span className='icon-text'>Bins</span>
      </span>
    </div>
  )
}

export default Sidebar
