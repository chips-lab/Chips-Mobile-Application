import React, { Component, useEffect,useState } from 'react';
import fire from '../Config/Fire';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams, 
    Redirect
  } from "react-router-dom";
  import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

 
 import '../Cards/card.css';
const  Card = () => {

  let mobile;
  if(isMobile){
  
    mobile= {
      width:800
    }
  }else {

    mobile = 0;
  }
  const [Posts, setPosts] = useState(null);
  const [userDetails, setUserDetails] = useState('');


 const getPosts = async () =>{
    const snapshot = await fire.db.collection('post2').get();
   return snapshot.docs.map(doc => doc.data());
}

const getuserforPost = async () => {
let post ={}
let posts = await getPosts();
let Posts = [];
posts.forEach( async (value,item) => {

 let info = await fire.db.collection(`Students`).doc(value.UsersPost.userid).get().then(snapshot =>{

  
  post.userpost =value.UsersPost;
    post.userDetail = snapshot.data();
 Posts.push(post);



});
//console.log(post);
post= {};


});
setPosts(Posts);
console.log(Posts);
return Posts;
}


  useEffect(async() => {
     
      await getuserforPost();
   
// setPosts(getPosts());


  },[]);





  if (Posts != null  || Posts !== undefined) {  
   console.log(Posts, 'post')
   
   Posts.forEach(userPost => { 

        return (
          
          <div>
           
         som

           <div>
{/* 
<div class="blog-container">
  
  <div class="card">
   <p class="card-text">
   <div class="blog-author--no-cover">
          <h3>Russ Beye</h3>
      </div>
       </p>
       <div class="view overlay">
         <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg"
           alt="Card image cap"/>
         <a href="#!">
           <div class="mask rgba-white-slight"></div>
         </a>
       </div>
  
       <div class="card-body">
  
         <h4 class="card-title">Card title</h4>
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
           card's content.</p>
         <button type="button" class="btn btn-light-blue btn-md">Read more</button>
  <hr/>
         <div class="row row-cols-3 row-cols-md-3">
   <div class="col mb-3">
     <i class="far fa-heart fa-2x"></i>
     
           </div> 
           
           <div class="col mb-3">
   
       <i class="far fa-star fa-2x"></i>
           </div> 
           
           <div class="col mb-3">
  
       <i class="far fa-comment fa-2x"></i>
           </div>
         </div>
         
       
  </div>
  
   </div>
   
  </div>
   */}



 
 

 <div class="col mb-1" >
<div class="container"   styles={{mobile}} >
  
<div class="card">
 <p class="card-text">
 <div class="blog-author--no-cover">
        <h3>{userPost.userpost.username} {Posts.length}</h3>
    </div>
     </p>
     <div class="view overlay">
       <img class="card-img-top" src={userPost.userpost.Media_url}
         alt="Card image cap"/>
       <a href="#!">
         <div class="mask rgba-white-slight"></div>
       </a>
     </div>

     <div class="card-body">

 <h4 class="card-title">{userPost.userpost.Title}</h4>
       <p class="card-text">{userPost.userpost.Information}</p>
       <button type="button" class="btn btn-light-blue btn-md">Read more</button>
<hr/>
       <div class="row row-cols-3 row-cols-md-3">
 <div class="col mb-3">
   <i class="far fa-heart fa-2x"></i>
   
         </div> 
         
         <div class="col mb-3">
 
     <i class="far fa-star fa-2x"></i>
         </div> 
         
         <div class="col mb-3">

     <i class="far fa-comment fa-2x"></i>
         </div>
       </div>
       
     
</div>

 </div>
 
</div>
  
</div>

 


</div>

 
 </div>
             
      
        );});

 }else {
return <div>loading</div>

  }
  }
  

export default Card;
