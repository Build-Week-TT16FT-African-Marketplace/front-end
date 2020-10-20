import React, { useState, useEffect } from 'react';
import schema from '../validation/signupSchema';
import * as yup from 'yup';
import axiosWithAuth from '../utils/axiosWithAuth'


const initialFormValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
}
const initialFormErrors = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
}
const initialUsers = [];
const initialDisabled = true;



function Signup(props) {

  const [ signups, setSignups ] = useState(initialUsers);
  const [ formValues, setFormValues ] = useState(initialFormValues);
  const [ formErrors, setFormErrors ] = useState(initialFormErrors);
  const [ disabled, setDisabled ] = useState(initialDisabled)

  /*** Begin Functions  ***/

  const onChange = (evt) => {
    const { name, value } = evt.target
    inputChange(name, value);
  }
  const onSubmit = (evt) => {
    evt.preventDefault();
    formSubmit();
  }


const getUsers = () => {
  console.log('getting users')
  // axios
  // .get('sample')
  // .then((res) => {
  //   console.log(res)
  //   // setSignups(res.data) ********* Uncomment
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
};

const postNewSignup = (newSignup) => {
console.log('new signup', newSignup);
setSignups([ newSignup, ...signups]);
setFormValues(initialFormValues);
console.log('signups', signups);
signups.push(newSignup);
console.log('updated signups', signups);

  axiosWithAuth()
  .post('auth/register', newSignup)
  .then((res) => {
    // setSignups([ res.data, ...signups ]);
    console.log('Account Successfully Created:', res.data)
    setFormValues(initialFormValues);
  })
  .catch((err) => {
    console.log(err)
  });
};

const formSubmit = () => {
  const newSignup = {
    firstname: formValues.firstname.trim(),
    lastname: formValues.lastname.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
  };
  postNewSignup(newSignup)
}

const inputChange = (name, value) => {
  yup
    .reach(schema, name)
    .validate(value)
    .then(() => {
      setFormErrors({
        ...formErrors,
        [name] : ''
      });
    })
    .catch((err) => {
      setFormErrors({
        ...formErrors,
        [name] : err.errors[0]
      });
    });
    setFormValues({
      ...formValues,
      [name] : value
    });
};


useEffect(() => {
  getUsers();
}, []);

useEffect(() => {
  schema.isValid(formValues).then((valid) => {
    setDisabled(valid);
  });
},
[ formValues ])


  return (
    <form className='form-container' onSubmit={onSubmit}>
      <label>
        First Name
        <input
        type='text'
        name='firstname'
        value={formValues.firstname}
        onChange={onChange}
        >
        </input>
      </label>
      <label>
        Last Name
        <input
        type='text'
        name='lastname'
        value={formValues.lastname}
        onChange={onChange}
        >
        </input>
      </label>
      <label>
        Email
        <input
        type='email'
        name='email'
        value={formValues.email}
        onChange={onChange}
        >
        </input>
      </label>
      <label>
        Password
        <input
        type='text'
        name='password'
        value={formValues.password}
        onChange={onChange}
        >
        </input>
      </label>

      <button
      disabled={disabled}
      >
        Create Account
      </button>
    </form>


  )
}

export default Signup