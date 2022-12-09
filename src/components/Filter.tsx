import React from 'react'
import { IoFilterOutline } from 'react-icons/io5'

const Filter = (props: { head?: string; filterPress?: any }) => {
  return (
    <div className='d-flex align-items-center mt-1'>
      <input
        type='text'
        className='filter form-control p-1 border-secondary border-end-0 rounded-0 border-opacity-25'
        onChange={props.filterPress}
        id={props.head}
      />
      <div className='material-symbols-outlined py-1 text-end border border-secondary border-start-0 h-100 border-opacity-25'>
        <IoFilterOutline />
      </div>
    </div>
  )
}

export default Filter
