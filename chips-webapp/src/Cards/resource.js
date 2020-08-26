import React, { Component } from 'react';
import svgBooks from '../Components/files/scrum_board.png';
import './resource.css';
import {

  Link
} from "react-router-dom";
class resource extends Component {
    render() {
        return (
           <div>
                
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet"/>
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
<div class="col">
<Link class="menu-item active" to={{ pathname: '/StudentResource', state:{Resource:"Assignment"}}}>
<div class="cards">
  <div class="card-headers">Assignments</div>
  <div class="card-mains">
    <i class="material-icons">description</i>
    <div class="main-descriptions">Assignment Repository</div>
  </div>
</div>
</Link>
</div>

<div class="col">
<Link class="menu-item active" to={{ pathname: '/StudentResource', state:{Resource:"Projects"}}}>

<div class="cards">
  <div class="card-headers">Projects</div>
  <div class="card-mains">
    <i class="material-icons">laptop</i>
    <div class="main-descriptions">projects </div>
  </div>
</div>
</Link>
</div>



<div class="col">
<Link class="menu-item active" to={{ pathname: '/StudentResource', state:{Resource:"Books"}}}>

<div class="cards">
  <div class="card-headers">Books</div>
  <div class="card-mains">
    <i class="material-icons">book</i>
    <div class="main-descriptions">
      e-books
    </div>
  </div>
</div>
</Link>
</div>



<div class="col">
<Link class="menu-item active" to={{ pathname: '/StudentResource', state:{Resource:"Other"}}}>

<div class="cards">
  <div class="card-headers">Others</div>
  <div class="card-mains">
  <i class="material-icons">settings</i>
    <div class="main-descriptions">other resources</div>
  </div>
</div>
</Link>
</div>



</div> 
</div>
        );
    }
}

export default resource;