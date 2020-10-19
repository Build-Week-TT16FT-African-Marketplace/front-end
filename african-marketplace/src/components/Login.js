//Import Statements
import React from, { useState, useEffect } "react";
//Styled components?

//Initial values. 


//Component Function
//Initial errors, values, and disabled.
function Login(){
    //Initialize state for errors, values, and disabled. 

    //Create helper functions and side effects.

    //Event handlers?

    //Build out JSX
    //Add onSubmit={submit} to <form>, onChange={change} to <input>'s.
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

export default Login;


//Create a separate file so that components render? f