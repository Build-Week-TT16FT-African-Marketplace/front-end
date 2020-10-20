//Schema for login page. Change to fit sign-up and login?
import * as yup from "yup";

export default yup.object().shape({
    username: yup 
        .string()
        .required("Username address is required."),
    password: yup
        .string()
        .required("A password is required.")
        .min(8, "Password must be eight characters."),
})