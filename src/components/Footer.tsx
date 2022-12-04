import React from 'react'

const Footer = () => {
  return (
    <div className='d-flex'>
      <div className='footerOptions ms-4 d-flex flex-grow-1'>
        <div className='me-3'>Privacy Policy</div>
        <div className='me-3'>Terms</div>
        <div className='me-3'>Contact</div>
      </div>
      <div className='d-flex flex-grow-1 justify-content-end me-4'>
        Powered by <span className='fw-semibold ms-1'> CARD91 </span>
      </div>
    </div>
  )
}

export default Footer
