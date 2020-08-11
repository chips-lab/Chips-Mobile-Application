import React, { Component } from 'react';
import  '../Auth/l.css'
import Google  from './GoogleAuth';
class Login extends Component {
    render() {
        return (
           
            <div class="login">
            <br/>
<div class="login-triangle"></div>

<h2 class="login-header">Log in</h2>

<form class="login-container">
 <p><input type="email" placeholder="Email"/></p>
 <p><input type="password" placeholder="Password"/></p>
 <Google/>
 <p><input type="submit" value="Log in"/></p>
</form>

         </div>
        );
    }
}

export default Login;
