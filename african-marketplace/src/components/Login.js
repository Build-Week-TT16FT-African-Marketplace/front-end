///// IMPORT STATEMENTS /////
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import schema from "../validation/loginSchema";
// Styled components?

// Initial values. 
const initialLoginValues = {
    email: "",
    password: "",
};
const initialErrors = {
    email: "",
    password: "",
};

///// MAIN FUNCTION /////
// Initial errors, values, and disabled.
function Login(){
    // Initialize state for errors, values, and disabled. 
    const [loginValues, setLoginValues] = useState(initialLoginValues);
    const [users, setUsers] = useState([]);
    const [loginErrors, setLoginErrors] = useState(initialErrors);
    const [disabled, setDisabled] = useState(true)
    
    ///// HELPERS /////
    const postNewUser = (newUser) => {
        axios
            .post("URL", newUser)
            .then((response) => {
                setUsers([response.data, ...users]);
                setLoginValues(initialLoginValues);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    ///// EVENT HANDLERS /////
    // Input change.
    const onChange = (name, value) => {
        yup 
            .reach(schema, name)
            .validate(value)
            .then(() => {
                setLoginErrors({
                    ...loginErrors,
                    [name]: "",
                });
            })
            .catch((error) => {
                setLoginErrors({
                    ...loginErrors, 
                    [name]: error.errors[0],
                });
            });
        
        setLoginValues({
            ...loginValues,
            [name]: value,
        });
    };

    // Input submit.
    const onSubmit = () => {
        const newUser = {
            email: loginValues.email.trim(),
            password: loginValues.password.trim(),
        };
        postNewUser(newUser);
    };

    ///// SIDE EFFECTS /////
    useEffect(() => {
        schema.isValid(loginValues).then((valid) => {
            setDisabled(!valid);
        })
    }, [loginValues]);

    ///// FORM /////
    return (
        <form className="loginForm" onSubmit={onSubmit}>
            <h3>Please sign in to view your account.</h3>

            <label> Email: 
                <input
                    name="email"
                    type="email"
                    value={loginValues.email}
                    onChange={onChange}
                />
            </label>

            <label> Password: 
                <input
                    name="password"
                    type="password"
                    value={loginValues.password}
                    onChange={onChange}
                />
            </label>

            <button disabled={disabled}>Login</button>
        </form>
    );
};

export default Login;


// Create a separate file so that components render on screen?