import React from 'react'
import Card from './Card'

const CardGroup = () => {
  return (
    <div className='container text-center'>
      <div className='row mb-3'>
        <div className='col'>
          <Card name='No: of Pending Approval' number={8} />
        </div>
        <div className='col'>
          <Card name='Requested Approval' number={12} />
        </div>
        <div className='col'>
          <Card name='Total Cards' number={1} />
        </div>
        <div className='col'>
          <Card name='Total Bins' number={2} />
        </div>
      </div>

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
    </div>
  )
}

export default CardGroup
