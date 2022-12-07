import React from 'react'
import Card from './Card'

const CardGroupTwo = () => {
  return (
    <div className='row'>
      <div className='col'>
        <Card name='Total Transactions' number={103} />
      </div>
      <div className='col'>
        <Card name='No. of Success' number={14} />
      </div>
      <div className='col'>
        <Card name='No. of Failed' number={89} />
      </div>
    </div>
  )
}

export default CardGroupTwo
