import React, { Component } from 'react';
import '../Auth/l.css'
import Google from './GoogleAuth';
class Login extends Component {
    render() {
        return (

            <div className="login-container">
                <form>
                    <img width="230" src="/logo_black.png" />
                    <p class="login-header">Login</p>
                    <input type="text" className="fields" placeholder="Username" /><br />
                    <input type="password" className="fields" placeholder="Password" /><br />
                    <input type="submit" className="submit" />
                    <Google />
                    <a className="signup">Not Registered? Sign up here.</a>
                </form>

            </div>
        );
    }
}

export default Login;

