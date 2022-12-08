import React from 'react'
import Card from './Card'
import CardGroupTwo from './CardGroupTwo'

const CardGroup = () => {
  return (
    <div className='container text-center'>
      <div className='row mb-3'>
        <div className='col'>
          <Card
            name='No: of Pending Approval'
            number={8}
            logo='supervisor_account'
          />
        </div>
        <div className='col'>
          <Card name='Requested Approval' number={12} logo='forward_to_inbox' />
        </div>
        <div className='col'>
          <Card name='Total Cards' number={1} logo='credit-card' />
        </div>
        <div className='col'>
          <Card name='Total Bins' number={2} logo='account_balance_wallet' />
        </div>
      </div>

      <CardGroupTwo />
    </div>
  )
}

export default CardGroup
