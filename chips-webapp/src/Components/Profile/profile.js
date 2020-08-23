import React, { Component } from 'react';
import './profile.css';
import Imp from '../Nav/import';
import User_Resource from './user_post';
class profile extends Component {
    render() {
        return (
            <div>
                <Imp/>
       <main>
 <div class="card">
	<div class="jumbo"></div>
	<div class="container icons">
		<div class="big-icon"></div>
		<div class="rate">
			<a class="star-btn add-btn btn-floating btn-large waves-effect waves-light blue darken-1"><i class="material-icons">star</i></a>
			<a class="like-btn add-btn btn-floating btn-large waves-effect waves-light blue darken-1"><i class="material-icons">thumb_up</i></a>
		</div>
		<div class="add">
			<a class="add-btn btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
		</div>
	</div>
	<div class="details">
		<h3>Leonardo DiCaprio</h3>
		<p>Actor / Environmentalist</p>
	</div>

    <div class="details">
	<button type="button" class="btn btn-outline-default  waves-effect">Edit Profile</button>
	</div>


	<div class="container bio">
			<div class="title">
				<h6>Biography</h6>
			</div>
			<div class="content">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro officiis fugit hic.</p>
			</div>
			<hr />
                 
            <ul class="list-unstyled d-flex justify-content-center mb-0 text-info">
            <li>
              <a class="mx-3" role="button"><i class="fab fa-lg fa-facebook-f"></i></a>
            </li>
            <li>
              <a class="mx-3" role="button"><i class="fab fa-lg fa-twitter"></i></a>
            </li>
            <li>
              <a class="mx-3" role="button"><i class="fab fa-lg fa-instagram"></i></a>
            </li>
            <li>
              <a class="mx-3" role="button"><i class="fab fa-lg fa-linkedin-in"></i></a>
            </li>
            <li>
              <a class="mx-3" role="button"><i class="fas fa-lg fa-envelope-square"></i></a>
            </li>
          </ul>
			<hr />

	</div>
    </div>

    <User_Resource/>
</main>
</div>
    
 
      
     
        );
    }
}

export default profile;
