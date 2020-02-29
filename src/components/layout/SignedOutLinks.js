import React from 'react';
import { NavLink } from 'react-router-dom';
//NavLink gets access to the active class when a certain link is active

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>Signup</NavLink></li>
            <li><NavLink to='/'>Login</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks