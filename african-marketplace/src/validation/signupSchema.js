import * as yup from 'yup';

export default yup.object().shape({
  firstname: yup
  .string()
  .required('First name is required'),

  lastname: yup
  .string()
  .required('Last name is required'),

  email: yup
  .string()
  .required('email is required'),

  password: yup
  .string()
  .required('password is required')
  .min(5, 'password mumst be at least 5 characters')

})