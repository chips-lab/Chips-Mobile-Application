import React, { useEffect,  useContext,useState } from 'react';
import fire from '../../Config/Fire';
import {   Link } from "react-router-dom";
  import {AuthContext} from '../../Config/Auth';
  import '../Profile/user.css';
const Head = () => {

  const {currentUser} = useContext(AuthContext);
 let userid;
  if(currentUser != null){
userid = currentUser.uid;
    console.log('user: '+ userid);
}
  


        return (
            <div>
  {userid != null ?                 
 <div class="header">
  <div class="header-left">
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 12h18M3 6h18M3 18h18" /></svg>  */}
   
   <div class="logo">
   </div>
   {/* <div class="search-bar">
    <input type="text" placeholder="Search..." />
   </div> */}
  </div>
  <div class="header-menu">
   <Link class="menu-item active" to={{ pathname: '/', state:{userid}}}>Home</Link>
   <div class="menu-item">Resources</div>
   <div class="menu-item ">Clubs</div>
   <div class="menu-item ">Events</div>
   <div class="menu-item ">Subscriptions</div>

   
  </div>
  <div class="user-settings">
   <Link class="button"  to={{ pathname: '/createPost', state:{userid}}}>
    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 512.06 512.06">
     <path d="M426.63 188.22C402.97 93.95 307.37 36.7 213.08 60.37A176 176 0 0080.39 218.3a96 96 0 0016 190.72h80v-32h-80a64 64 0 010-128 16 16 0 0016-16c-.08-79.53 64.33-144.06 143.86-144.14a144 144 0 01141.42 116.14 16 16 0 0013.6 12.8 80 80 0 01-10.88 159.2h-64v32h64c61.86-.18 111.85-50.48 111.66-112.34a112 112 0 00-85.41-108.46z" />
     <path d="M245.03 253.66l-64 64 22.56 22.56 36.8-36.64v153.44h32V303.58l36.64 36.64 22.56-22.56-64-64a16 16 0 00-22.55 0z" /></svg>
    Create Post </Link>


   <svg class="notify" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" /></svg>
    <Link  to={{ pathname: '/Profile', state:{userid}}}> 
   <img class="user-profile " src="https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt=""/>
   </Link>
   {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 492 492">
    <path d="M484.13 124.99l-16.11-16.23a26.72 26.72 0 00-19.04-7.86c-7.2 0-13.96 2.79-19.03 7.86L246.1 292.6 62.06 108.55c-5.07-5.06-11.82-7.85-19.03-7.85s-13.97 2.79-19.04 7.85L7.87 124.68a26.94 26.94 0 000 38.06l219.14 219.93c5.06 5.06 11.81 8.63 19.08 8.63h.09c7.2 0 13.96-3.57 19.02-8.63l218.93-219.33A27.18 27.18 0 00492 144.1c0-7.2-2.8-14.06-7.87-19.12z" /></svg>
   */}
  </div>
 </div>

 : '' }

            </div>
        );
    
}

export default Head;
