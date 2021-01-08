import React, { Component } from 'react';
import Posts  from '../Cards/card';
import Resource from './Resources/Resource';

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
  import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";
  
  import Recomendation from '../Cards/recomendation';
const  Home = () => {


     const Logout =()=>{

        fire.auth.signOut();
       
       
        return <Redirect to="/" />
       
         }


   
        return (
            <div >

                <div>

{/* <Recomendation/> */}
                </div>
<hr/>
<div class="h-color">
<Link  className="btn  btn-elegant" to={{ pathname: '/createPost'}}>create</Link>


<a  type="button" class="btn btn-unique" onClick={Logout}> Logout</a>
                <Posts/>
                </div>
            </div>
        );
   
}

export default Home;
