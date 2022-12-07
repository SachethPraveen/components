import React from 'react'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'

const Pagination = (props: { length?: number }) => {
  return (
    <div className='d-flex justify-content-between mt-2'>
      <div className='ms-2'>
        Showing Results {props.length ? props.length : '5'} of{' '}
        {props.length ? props.length : '5'}
      </div>
      <nav className='me-2' aria-label='...'>
        <ul className='pagination pagination-sm '>
          <li className='page-item disabled'>
            <span className='page-link h-100 border-0 d-flex align-items-center justify-content-center'>
              <span className='material-symbols-outlined fs-6 '>
                <IoChevronBackOutline />
              </span>
            </span>
          </li>

          <li className='page-item active'>
            <span className='page-link h-100 border-0 rounded-circle text-dark bg-light'>
              1
            </span>
          </li>

          <li className='page-item border-0' aria-current='page'>
            <span className='page-link h-100 border-0 rounded-circle text-dark'>
              2
            </span>
          </li>
          <li className='page-item'>
            <a
              className='page-link h-100 border-0 rounded-circle text-dark'
              href='#'
            >
              3
            </a>
          </li>

          <li className='page-item'>
            <a
              className='page-link h-100 border-0 d-flex align-items-center justify-content-center'
              href='#'
            >
              <span className='material-symbols-outlined fs-6 text-dark'>
                <IoChevronForwardOutline />
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination
