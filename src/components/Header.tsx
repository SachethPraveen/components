import React from 'react'
import { BsPerson } from 'react-icons/bs'

const Header = (props: { name?: string }) => {
  return (
    <div
      className='navbar d-flex justify-content-end bg-white w-100'
      style={{ zIndex: 2 }}
    >
      <div className='dropdown me-3'>
        <button
          className='btn bg-white border-0 dropdown-toggle d-flex align-items-center'
          type='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          <div className='fs-5 me-1'>
            <BsPerson />
          </div>
          <div>{props.name ? props.name : 'User'}</div>
        </button>
        <ul className='dropdown-menu'>
          <li>
            <a className='dropdown-item' href='/'>
              Logout
              <span className='material-symbols-outlined'>power_rounded</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
