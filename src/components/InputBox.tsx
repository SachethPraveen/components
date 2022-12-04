import React from 'react'

const InputBox = (props: { field?: string; fieldName?: string }) => {
  return (
    <div className='mb-3 w-100'>
      <label
        htmlFor={props.field ? props.field : 'username'}
        className='form-label w-100'
      >
        {props.fieldName ? props.fieldName : 'Enter user name'}
      </label>

      <input
        type='text'
        className='form-control w-100'
        id={props.field ? props.field : 'username'}
        placeholder='Username'
      />
    </div>
  )
}

export default InputBox
