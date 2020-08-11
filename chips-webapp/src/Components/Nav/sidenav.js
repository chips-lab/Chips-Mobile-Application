import React, { Component } from 'react';
import './snav.css'
class sidenav extends Component {
    render() {
        return (
            
                   
            <div id="menuToggle">
              <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
            <ul id="menu">
              <li><a href="#">Home</a></li>
              <li><a href="#">profile</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Agenda</a></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">Club</a></li>


            </ul>
           </div>
        
            
        );
    }
}

export default sidenav;
