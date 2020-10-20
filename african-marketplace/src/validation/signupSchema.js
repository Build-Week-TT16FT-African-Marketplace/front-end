import * as yup from 'yup';

export default yup.object().shape({
  // firstname: yup
  // .string()
  // .required('First name is required'),

  // lastname: yup
  // .string()
  // .required('Last name is required'),

  username: yup
  .string()
  .required('username is required'),

  password: yup
  .string()
  .required('password is required')
  .min(5, 'password must be at least 5 characters'),

  department: yup
  .string()
  .oneOf(['buyer', 'seller'], 'Please select a department')

})