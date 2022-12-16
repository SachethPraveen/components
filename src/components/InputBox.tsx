import React from 'react'

const InputBox = (props: {
  keyPress: any
  onChange: any
  isUser: boolean
  userError: boolean
  passError: boolean
  invalid: boolean
  notFound: boolean
}) => {
  return (
    <div className='mb-3 w-100'>
      <div className='mb-3'>
        <label htmlFor='username' className='form-label w-100'>
          Enter user name
        </label>

        <input
          type='text'
          className='form-control w-100'
          id='username'
          placeholder='Username'
          onKeyDown={props.keyPress}
          onChange={props.onChange}
        />

        {props.userError && (
          <p className='text-danger'>Please enter a valid Username!</p>
        )}

        {props.notFound && <p className='text-danger'>User not Found!</p>}
      </div>

      {props.isUser && (
        <div>
          <label htmlFor='password' className='form-label w-100'>
            Enter Password
          </label>

          <input
            type='password'
            className='form-control w-100'
            id='password'
            placeholder='Password'
            onKeyDown={props.keyPress}
            onChange={props.onChange}
          />

          {props.passError && (
            <p className='text-danger'>
              Password should be atleast 8 characters!
            </p>
          )}

          {props.invalid && <p className='text-danger'>Invalid Password!</p>}
        </div>
      )}
    </div>
  )
}

export default InputBox
