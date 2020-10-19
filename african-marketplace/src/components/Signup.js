import React from 'react';




export default function Signup(props) {




  return (
    <form className='form-container'>
      <label>
        First Name
        <input
        type='text'
        name='firstname'
        // value={value}
        // onChange={onChange}
        >
        </input>
      </label>
      <label>
        Last Name
        <input
        type='text'
        name='lastname'
        // value={value}
        // onChange={onChange}
        >
        </input>
      </label>
      <label>
        Email
        <input
        type='email'
        name='email'
        // value={value}
        // onChange={onChange}
        >
        </input>
      </label>
      <label>
        Password
        <input
        type='text'
        name='password'
        // value={value}
        // onChange={onChange}
        >
        </input>
      </label>

      <button
      // disabled={disabled}
      >
        Create Account
      </button>
    </form>


  )
}