import React, { useState, useEffect } from 'react';
import schema from '../validation/signupSchema';
import * as yup from 'yup';
import Axios from 'axios';


const initialFormValues = {
  // firstname: '',
  // lastname: '',
  username: '',
  password: '',
  department: ''
}

const initialFormErrors = {
  // firstname: '',
  // lastname: '',
  username: '',
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
setSignups([ newSignup, ...signups]);
setFormValues(initialFormValues);
console.log('signups', signups);
signups.push(newSignup);
console.log('newsignup push', signups)


  Axios
  .post("https://african-marketplace-back-end.herokuapp.com/auth/register", newSignup)
  .then((res) => {
    setSignups([ res.data, ...signups ]);
    console.log('Account Successfully Created:', res.data)
    setFormValues(initialFormValues);
  })
  .catch((err) => {
    console.log(err)
  });
};

const formSubmit = () => {
  const newSignup = {
    // firstname: formValues.firstname.trim(),
    // lastname: formValues.lastname.trim(),
    username: formValues.username.trim(),
    password: formValues.password.trim(),
    department: formValues.department.trim(),
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
    setDisabled(!valid);
  });
},
[ formValues ])


  return (
    <form className='form-container' onSubmit={onSubmit}>
      {/* <label>
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
      </label> */}
      <label>
        Username
        <input
        type='text'
        name='username'
        value={formValues.username}
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
      <label>
      <div>
        <input 
        type="radio" 
        value='buyer'
        checked={formValues.department === 'buyer'} 
        name="department"
        onChange={onChange}
        /> Buyer

        <input type="radio" 
        value='seller'
        checked={formValues.department === 'seller'} 
        name="department" 
        onChange={onChange}
        /> Seller
      </div>
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