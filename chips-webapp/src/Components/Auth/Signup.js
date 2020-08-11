import React, { Component } from 'react';
import './s.css';
class Signup extends Component {
    render() {
        return (
            <div>
    
    <br/>
    <div class="wrapper">
      <div id="box">
        <img src="https://image.freepik.com/free-icon/refresh_318-33117.jpg" alt="lock" />
        <h3>Sign up</h3>
        <form>
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="PASSWORD" />
        <input type="password" placeholder="Confirm PASSWORD" />

        </form>
         <a href="#">forgot ?</a>
         <input onclick="this.style.backgroundColor = '#69c061';" type="submit" value="Register"/>
        
        <div class="signup">
          <p>not a member ? <a href="#">sign in</a></p>
        </div>
      </div>
    </div>
  
            </div>
        );
    }
}

export default Signup;
