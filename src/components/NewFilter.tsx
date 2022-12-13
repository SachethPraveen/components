import React from 'react'

const NewFilter = ({ column }: any) => {
  const { filterValue, setFilter } = column
  return (
    <div className='w-100 d-flex'>
      <input
        className='form-control p-1 border-secondary border-end-0 rounded-0 border-opacity-25'
        value={filterValue || ''}
        onChange={(event) => setFilter(event.target.value)}
      />
      <span className='material-symbols-outlined py-1 text-end border border-secondary border-start-0 h-100 border-opacity-25'>
        filter_list
      </span>
    </div>
  )
}

export default NewFilter
