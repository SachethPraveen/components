import React from 'react'
import Card from './Card'

const CardGroupTwo = () => {
  return (
    <div className='row'>
      <div className='col'>
        <Card name='Total Transactions' number={103} logo='payments' />
      </div>
      <div className='col'>
        <Card name='No. of Success' number={14} logo='credit_score' />
      </div>
      <div className='col'>
        <Card name='No. of Failed' number={89} logo='credit_card_off' />
      </div>
    </div>
  )
}

export default CardGroupTwo
