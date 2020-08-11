import React, { Component } from 'react';
import Tmp from './import';
import Sidenav from './sidenav';
class Navigation extends Component {
    render() {
        return (
			<div>
				<Tmp/>
		
				<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
				
				<div class="navbar-toggler"  data-toggle="collapse" data-target="#navbarTogglerDemo01"
    aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
	<Sidenav/>
  </div>
			
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">Chips</a>
    <ul class="navbar-nav mr-auto mt-lg-0">
    
      <li class="nav-item">
        <a class="nav-link" href="#">Profile</a>
      </li>
	  <li class="nav-item">
        <a class="nav-link" href="#">Event</a>
      </li><li class="nav-item">
        <a class="nav-link" href="#">agenda</a>
      </li><li class="nav-item">
        <a class="nav-link" href="#">Resurce</a>
      </li><li class="nav-item">
        <a class="nav-link" href="#">Club</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
		  </div>
        );
    }
}

export default Navigation;
