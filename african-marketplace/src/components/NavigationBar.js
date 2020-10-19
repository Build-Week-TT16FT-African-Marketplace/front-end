import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

export default function NavBar () {

    return(
        <Switch>
            <Route>
                <Link>Home</Link>
            </Route>
            
            <Route>
                <Link>Login</Link>
            </Route>
            
            <Route>
                <Link>Post Item</Link>
            </Route>
            
            <Route>
                <Link>View Items</Link>
            </Route>
        </Switch>
    )
}