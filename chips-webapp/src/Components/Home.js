import React, { Component } from 'react';
import Posts  from './Post/Posts';
import Resource from './Resources/ResourceCorsol';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams, 
    Redirect
  } from "react-router-dom";
  import fire from '../Config/Fire';
const  Home = () => {


     const Logout =()=>{

        fire.auth.signOut();
       
       
        return <Redirect to="/" />
       
         }


   
        return (
            <div>

                <div>
<Link  className="btn  btn-elegant" to={{ pathname: '/createPost'}}>create</Link>

<a  type="button" class="btn btn-unique" onClick={Logout}> Logout</a>

                </div>
<hr/>


                <Posts/>
            </div>
        );
   
}

export default Home;
