import React from 'react'

const InputBox = (props: {
  keyPress: any
  onChange: any
  isUser: boolean
  error: boolean
  invalid: boolean
  notFound: boolean
}) => {
  return (
    <div className='mb-3 w-100'>
      {!props.isUser && (
        <div>
          <label htmlFor='username' className='form-label w-100'>
            Enter user name
          </label>

          <input
            type='text'
            className='form-control w-100'
            id='username'
            placeholder='Username'
            onKeyPress={props.keyPress}
            onChange={props.onChange}
          />

          {props.error && (
            <p className='text-danger'>Please enter a valid Username!</p>
          )}

          {props.notFound && <p className='text-danger'>User not Found!</p>}
        </div>
      )}

      {props.isUser && !props.error && (
        <div>
          <label htmlFor='password' className='form-label w-100'>
            Enter Password
          </label>

          <input
            type='text'
            className='form-control w-100'
            id='password'
            placeholder='Password'
            onKeyPress={props.keyPress}
            onChange={props.onChange}
          />
          {props.error && (
            <p className='text-danger'>
              Password should be atleast 8 characters!
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default InputBox
