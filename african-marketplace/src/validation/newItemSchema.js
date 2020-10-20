import * as yup from 'yup';


export default yup.object().shape({
name: yup
  .string()
  .required('Item name is required.')
  .min(2, 'Name must be at least two characters long.'),

description: yup
  .number()
  .required('Please enter a brief description of your product.')
  .integer("Please input price as a whole number"),

location: yup
  .string(),

category: yup
  .string()
  .oneOf(['fruit', 'vegetable', 'other'], 'Please select a category'),

URL: yup
  .string(),
})
