import React ,{ useEffect,useState,useCallback } from 'react';
import './u.css';
import fire from '../../Config/Fire';
import {Link, withRouter,useHistory  } from "react-router-dom";

const ProfileEdit = (props) => {
 const [userid,setUserid] = useState(null);
  const [userinfo, setUserinfo] = useState(null);
  let history = useHistory();
const [userImage,setUserImage] = useState(null); 

  useEffect(() => {

    setUserid(props.location.state.userid);
    setUserinfo(props.location.state.userinfo)
console.log(userinfo);
  });

  const handleChange = useCallback((e) => {
setUserImage(
  URL.createObjectURL(e.target.files[0])
)
console.log('image',userImage);


  },[])
  const handleUpdate = useCallback(
    async event => {
 
 event.preventDefault();
 
 
 
 try{
     const {username,description,facebook,linkedin,instagram,twitter,github} = event.target.elements;
    

// const profile = '';
// if(userImage!== null){
//  const storageRef =  fire.storage.ref(`${'profilePicture'}/${userid}`);
//  const profilePicture = await storageRef.put(userImage);
//  profilePicture.on(fire.storage.TaskEvent.STATE_ChANGED,()=> {
 
//    let downloadURL = profilePicture.downloadURL
   

//  });

// }

 
  {username.value == '' ? userinfo.username = username.placeholder : userinfo.username = username.value   }
  {description.value == '' ? userinfo.Description = description.placeholder : userinfo.Description = description.value   }

  {facebook.value == '' ? userinfo.SocialLinks.facebook = facebook.placeholder : userinfo.SocialLinks.facebook = facebook.value   }
  {linkedin.value == ''  ? userinfo.SocialLinks.linkedin = linkedin.placeholder : userinfo.SocialLinks.linkedin = linkedin.value   }
  {instagram.value == '' ? userinfo.SocialLinks.instagram = instagram.placeholder :userinfo.SocialLinks.instagram = instagram.value   }
  {github.value == ''  ? userinfo.SocialLinks.github = github.placeholder :  userinfo.SocialLinks.github = github.value   }
  {twitter.value == ''  ? userinfo.SocialLinks.twitter = twitter.placeholder :  userinfo.SocialLinks.twitter = twitter.value   }

console.log(userinfo.SocialLinks);


console.log(facebook.value,linkedin.value,instagram.value,twitter.value,github.value)
   fire.db.collection('Students').doc(userid).update({
 
    username:userinfo.username, 
    firstname:userinfo.firstname,
    lastname:userinfo.lastname,
    Description:userinfo.Description,
    email:userinfo.email,
    Membership:['CHIPS'],
    SocialLinks:{facebook:userinfo.SocialLinks.facebook,linkedin: userinfo.SocialLinks.linkedin,instagram:userinfo.SocialLinks.instagram,twitter:userinfo.SocialLinks.twitter,github:userinfo.SocialLinks.github},
    photourl:'',

});

alert('updated');
history.push(
  {pathname:'/Profile',
    state: { userid: userid}
  }
  );



 }catch(error){
  console.log(error);  
  alert(error)
    
 }
 
    }
 
 ,);

        return (
            <div>
            {userinfo!== null ? 
            <div>
                <h5 class=" info-color white-text text-center py-4">
    <strong>Edit profile</strong>
</h5>


         <section class="container">
             

<br/>
<form onSubmit={handleUpdate}>
			<span class="section-header">Username</span>
	
	<div class="form-group">
		<label class="legend-top">
			<input type="text" name="username" placeholder={userinfo.username} />
			<span></span>
		</label>
	</div>


  <span class="section-header">Description</span>
 
        <textarea id="textarea" name="description" class="form-control mb-4"  placeholder={userinfo.Description}></textarea>

{/* <div className="position">
        <div id="file-upload-form" class="uploader">
  <input id="file-upload" onChange={handleChange} type="file" name="fileUpload" accept="image/*" />

  <label for="file-upload" id="file-drag">
    <img id="file-image" src={userImage} alt="Preview" class="hidden"/>
    <div id="start">
      <i class="fa fa-download" aria-hidden="true"></i>
      <div>Select a Profile pictur</div>
      <div id="notimage" class="hidden">Please select an image</div>
      <span id="file-upload-btn" class="btn btn-primary">Select a file</span>
    </div>
    <div id="response" class="hidden">
      <div id="messages"></div>
      <progress class="progress" id="file-progress" value="0">
        <span>0</span>%
      </progress>
    </div>
  </label>
</div>
</div> */}
<span class="section-header">Socials</span>
<div>
<label class="sr-only" for="inlineFormInputGroup"></label>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text"><i class="fab fa-lg fa-facebook-f"></i></div>
        </div>
        <input type="text" class="form-control py-0" name="facebook" id="inlineFormInputGroup" placeholder={userinfo.SocialLinks.facebook}/>
      </div>
      </div>

      <div>
<label class="sr-only" for="inlineFormInputGroup"></label>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text"><i class="fab fa-lg fa-linkedin-in"></i></div>
        </div>
        <input type="text" class="form-control py-0" name="linkedin" id="inlineFormInputGroup" placeholder={userinfo.SocialLinks.linkedin}/>
      </div>
      </div>
      <div>
<label class="sr-only" for="inlineFormInputGroup"></label>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text"><i class="fab fa-lg fa-instagram"></i></div>
        </div>
        <input type="text" class="form-control py-0" id="inlineFormInputGroup" name="instagram" placeholder={userinfo.SocialLinks.instagram}/>
      </div>
      </div><div>
<label class="sr-only" for="inlineFormInputGroup"></label>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text"><i class="fab fa-lg fa-twitter"></i></div>
        </div>
        <input type="text" class="form-control py-0" id="inlineFormInputGroup" name="twitter" placeholder={userinfo.SocialLinks.twitter}/>
      </div>
      </div><div>
<label class="sr-only" for="inlineFormInputGroup"></label>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text"><i class="fab fa-lg fa-github"></i></div>
        </div>
        <input type="text" class="form-control py-0" name="github" id="inlineFormInputGroup" placeholder={userinfo.SocialLinks.github}/>
      </div>
      </div>
<br/>
<button class="btn btn-info btn-rounded btn-block my-4" type="submit">Update</button>
</form>


         
</section>
</div>
: ''}
</div>
            
        );
    
}

export default ProfileEdit;
