import React, { useState } from 'react'
import './Sidebar.css'
import { BiHomeAlt, BiMoney } from 'react-icons/bi'
import { GiSwipeCard } from 'react-icons/gi'
import { IoCardOutline } from 'react-icons/io5'

const Sidebar = (props: { id?: number }) => {
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
      <a href={`/${props.id}`}>
        <span className='material-symbols-outlined'>
          <BiHomeAlt />
        </span>
        <span className='icon-text'>Home</span>
      </a>
      <br />

      <a href='/transactions'>
        <span className='material-symbols-outlined'>
          <BiMoney />
        </span>
        <span className='icon-text'>Transactions</span>
      </a>
      <br />

      <a href='/cards'>
        <span className='material-symbols-outlined'>
          <GiSwipeCard />
        </span>
        <span className='icon-text'>Cards</span>
      </a>
      <br />

      <a href='/bins'>
        <span className='material-symbols-outlined'>
          <IoCardOutline />
        </span>
        <span className='icon-text'>Bins</span>
      </a>
    </div>
  )
}

export default Sidebar
