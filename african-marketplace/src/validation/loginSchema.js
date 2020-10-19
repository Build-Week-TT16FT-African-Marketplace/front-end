//Schema for login page. Change to fit sign-up and login?
import * as yup from "yup";

export default yup.object().shape({
    email: yup 
        .string()
        .email("Must be a valid email address.")
        .required("An email address is required."),
    password: yup
        .string()
        .required("A password is required.")
        .min(8, "Password must be eight characters."),
})