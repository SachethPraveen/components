import React, { useState } from 'react'
import './Sidebar.css'
import { BiHomeAlt, BiMoney } from 'react-icons/bi'
import { GiSwipeCard } from 'react-icons/gi'
import { IoCardOutline } from 'react-icons/io5'

const Sidebar = (props: { sideClick: () => void }) => {
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
      <a id='overview' onClick={props.sideClick}>
        <span className='material-symbols-outlined'>
          <BiHomeAlt />
        </span>
        <span className='icon-text'>Home</span>
      </a>

      <br />

      <a id='transactions' onClick={props.sideClick}>
        <span className='material-symbols-outlined'>
          <BiMoney />
        </span>
        <span className='icon-text'>Transactions</span>
      </a>
      <br />

      <a id='cards' onClick={props.sideClick}>
        <span className='material-symbols-outlined'>
          <GiSwipeCard />
        </span>
        <span className='icon-text'>Cards</span>
      </a>
      <br />

      <a id='bins' onClick={props.sideClick}>
        <span className='material-symbols-outlined'>
          <IoCardOutline />
        </span>
        <span className='icon-text'>Bins</span>
      </a>
    </div>
  )
}

export default Sidebar
