//Import Statements
import React from "react";
//Styled components?


//Initial form values, initial disabled should probably be written in App.js


//Component Function
export default function Login(props){
    //Pass Login(props), then destructure props here
    const { values, submit, change, disabled, errors } = props;
   
    //Build out JSX
    //Come back and add onSubmit={submit} to <form>, onChange={change} to <input>'s
    //Don't forget to build onChange/onSubmit in App.js. 
    return (
        <form className="loginForm">
            <h3>Please sign in to view your account.</h3>

            <label> Email: 
                <input
                    name="email"
                    type="email"
                    value={values.email}
                    // onChange={change}
                />
            </label>

            <label> Password: 
                <input
                    name="password"
                    type="password"
                    value={values.password}
                    // onChange={change}
                />
            </label>

            <button disabled={disabled}>Login</button>
        </form>
    );
};