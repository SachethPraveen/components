import React from 'react'

const Pagination = (props: {
  length?: number
  pages: number[]
  previous: any
  next: any
  canPrevious: boolean
  canNext: boolean
  index: number
}) => {
  return (
    <div className='d-flex justify-content-between align-items-center mt-2'>
      <div>
        Showing Results{' '}
        {props.length ? (props.length < 10 ? props.length : '10') : '5'} of{' '}
        {props.length ? props.length : '5'}
      </div>
      <nav className='me-2' aria-label='...'>
        <ul className='pagination pagination-sm '>
          <li className='page-item'>
            <button
              className='btn h-100 border-0 rounded-circle d-flex align-items-center justify-content-center'
              onClick={props.previous}
              disabled={!props.canPrevious}
            >
              <span className='material-symbols-outlined fs-6 text-dark'>
                arrow_back_ios
              </span>
            </button>
          </li>
          <li className='page-item m-2'>
            <div>
              Page{' '}
              <strong>
                {props.index + 1} of {props.pages.length}
              </strong>
            </div>
          </li>
          <li className='page-item'>
            <button
              className='btn h-100 border-0 rounded-circle d-flex align-items-center justify-content-center'
              onClick={props.next}
              disabled={!props.canNext}
            >
              <span className='material-symbols-outlined fs-6 text-dark '>
                arrow_forward_ios
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination
