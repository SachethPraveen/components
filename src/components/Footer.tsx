import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='d-flex'>
      <div className='footerOptions ms-4 d-flex flex-grow-1'>
        <div>Privacy Policy</div>
        <div>Terms</div>
        <div>Contact</div>
      </div>
      <div className='d-flex flex-grow-1 justify-content-end me-4'>
        Powered by <span className='fw-semibold ms-1'> CARD91 </span>
      </div>
    </div>
  )
}

export default Footer
