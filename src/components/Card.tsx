import React from 'react'

const Card = (props: { name?: string; number?: number; logo?: string }) => {
  return (
    <div className='card d-flex flex-row align-items-center w-100 mt-3'>
      <div className='p-2 m-1 w-100 text-start'>
        <div className='fs-6'>{props.name ? props.name : 'Detail Name'}</div>
        <div className='fs-1'>{props.number ? props.number : 0}</div>
      </div>

      <div className='p-2 m-1'>
        {props.logo ? (
          <span className='logo material-symbols-outlined fs-1'>
            {props.logo}
          </span>
        ) : (
          'Logo'
        )}
      </div>
    </div>
  )
}

export default Card
