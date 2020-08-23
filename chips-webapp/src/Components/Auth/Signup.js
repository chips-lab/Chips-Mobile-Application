import React, { Component } from 'react';
import './s.css';
class Signup extends Component {
  render() {
    return (
      <div className="login-container">
        <form>
          <img width="230" src="/logo_black.png" />
          <p class="login-header">Sign Up</p>
          <input type="text" className="fields" placeholder="First name" /><br />
          <input type="text" className="fields" placeholder="Last name" /><br />
          <input type="text" className="fields" placeholder="Email" /><br />
          <input type="password" className="fields" placeholder="Password" /><br />
          <input type="password" className="fields" placeholder="Confirm Password" /><br />
          <input type="submit" className="submit" /><br />
          <a className="signup">Already Registered? Log in here.</a>
        </form>

      </div>
    );
  }
}

export default Signup;