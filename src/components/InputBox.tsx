import React from 'react'

const InputBox = (props: { field?: string; fieldName?: string }) => {
  return (
    <div className='mb-3'>
      <label
        htmlFor={props.field ? props.field : 'username'}
        className='form-label w-25'
      >
        {props.fieldName ? props.fieldName : 'Enter user name'}
      </label>

      <input
        type='text'
        className='form-control w-25'
        id={props.field ? props.field : 'username'}
      />
    </div>
  )
}

export default InputBox;
