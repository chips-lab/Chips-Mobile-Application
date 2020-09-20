import React, { useEffect,useState } from 'react';
import './profile.css';
import Imp from '../Nav/import';
import User_Resource from './user_post';
import firebase from '../../Config/Fire';
import pImage from '../files/profile.png';

import { Link} from "react-router-dom";
const  Profile =(props)=> {
  const [userinfo, setUserinfo] = useState(null);



      
   const userProfile = () => {
    var ref =  firebase.db.collection('Students').doc(props.location.state.userid);
   
    ref.get().then((doc)=> {
 if(doc.exists){
 
  setUserinfo( doc.data());
//  console.log('user:',userinfo);
//  userinfo.Description = doc.data().Description;
//  userinfo.Membership = doc.data().Membership;
//  userinfo.SocialLinks = doc.data().SocialLinks;
//  userinfo.email = doc.data().email;
 // userinfo.firstname = doc.data().
 }else {
   console.log('no such document');
 }
     
    }).catch((error)=> {
 console.log('error getting document:', error);
    });

    return userinfo;
  }

    useEffect(() => {
     
      userProfile();

    },[userinfo,userProfile]);

   return (
            <div>
 
     {userinfo !== null   ?      
       <main>
            <Imp/>

      
      
            
 <div class="card">
	<div class="jumbo"></div>
	<div class="container icons">
		<div class="big-icon" style ={ { backgroundImage: "url("+pImage+")  center top" } }></div>
		<div class="rate">
    {/* <button class="btn btn-primary"><i class="fas fa-magic mr-1"></i> Left</button>
		<button class="btn btn-default">Right <i class="fas fa-magic ml-1"></i></button> */}
		</div>
		<div class="add">
    {/* <button class="btn btn-default">Right <i class="fas fa-magic ml-1"></i></button>		 */}
    </div>
	</div>
	<div class="details">
   <h3>{userinfo.username}</h3>
   <p>{userinfo.firstname} {userinfo.lastname}</p>
	</div>

    <div class="details">
	<Link type="button" class="btn btn-outline-default  waves-effect" to={{ pathname: "/Profile/Edit", state:{userid:props.location.state.userid,userinfo:userinfo}}} >Edit Profile</Link>
	
  </div>


	<div class="container bio">
			<div class="title">
				<h6>Biography</h6>
			</div>
			<div class="content">
 {userinfo.Description != '' ?   <p> {userinfo.Description} </p>: 'you have No description.'}
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
            {/* <li>
              <a class="mx-3" role="button"><i class="fas fa-lg fa-envelope-square"></i></a>
            </li> */}
          </ul>
			<hr />

	</div>
    </div>

    <User_Resource/>
</main>
:  ''}

</div>
    
 
      
     
  
    
   );




}

export default Profile;
