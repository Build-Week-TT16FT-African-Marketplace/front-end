///// IMPORT STATEMENTS /////
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import schema from "../validation/loginSchema";
import useHistory from 'react-router-dom'
// Styled components?

// Initial values. 
const initialLoginValues = {
    username: "",
    password: "",
};
const initialErrors = {
    username: "",
    password: "",
};

///// MAIN FUNCTION /////
// Initial errors, values, and disabled.
function Login(){

    const { push } = useHistory();

    // Initialize state for errors, values, and disabled. 
    const [loginValues, setLoginValues] = useState(initialLoginValues);
    const [users, setUsers] = useState([]);
    const [loginErrors, setLoginErrors] = useState(initialErrors);
    const [disabled, setDisabled] = useState(true)
    
    ///// HELPERS /////
    const postNewUser = (newUser) => {
        axios
            .post("https://african-marketplace-back-end.herokuapp.com/auth/login", newUser)
            .then((res) => {
                console.log("Successful Login:", res.data)
                setUsers([newUser, ...users]);
                setLoginValues(initialLoginValues);
                window.localStorage.setItem('token', res.data.token)
                push('/Market')
            })
            .catch((error) => {
                console.log("Unsuccessful Login:", error);
            });
    }

    ///// EVENT HANDLERS /////
    // Input change.
    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

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
    const onSubmit = (e) => {
        e.preventDefault(); // added by steven
        const newUser = {
            username: loginValues.username.trim(),
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

            <label> Username: 
                <input
                    name="username"
                    type="string"
                    value={loginValues.username}
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