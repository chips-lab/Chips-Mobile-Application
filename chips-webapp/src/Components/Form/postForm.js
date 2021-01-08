import React ,{ useEffect,useState,useCallback } from 'react';
import fire from '../../Config/Fire';
import {Link, withRouter,useHistory  } from "react-router-dom";
import Swal from 'sweetalert2';
import './u.css';





const PostForm = (props) =>  {
   const [upload,setupload] = useState(null);
  const [inputList, setInputList] = useState([{ SocialLinks: "" }]);
  const [userid,setUserid] = useState(null);
  let history = useHistory();
   const [useMedia,setUserMedia] = useState(false); 
  const [postMedia,setpostMedia] = useState(null); 
  const [display,setDisplay] = useState('Select a media file'); 
  const [userinfo, setUserinfo] = useState(null);
  const [Murl,setMUrl] = useState(''); 
let bo = false;

let urls = '';
  const handleChange =e  => {
    if(e.target.files[0] != null || typeof undefined){
    var filesize = e.target.files[0].size /1024 /1024;
    if(filesize < 20) {
    setpostMedia(e.target.files[0]);
    setDisplay("file selected");
    console.log('media:',postMedia);
    console.log('less than 20 mb')

    }else {
 console.log("over 20 mb");
 Swal.fire({
  title: 'warning',
  text: 'file cannot over 20mb',
  icon: 'warning',
  confirmButtonText: 'OK'
})
    }
  
    }else {

      setDisplay("Select a media file");
    }
      };
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
const getUrl= () =>{

}
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { SocialLink: "" }]);
  };
  useEffect(() => {
    userProfile();
    setUserid(props.location.state.userid);
    console.log('run')

console.log(inputList);
  },[]);

  const userProfile = () => {
    var ref =  fire.db.collection('Students').doc(props.location.state.userid);
   
    ref.get().then((doc)=> {
 if(doc.exists){
 
  setUserinfo( doc.data());

 }else {
   console.log('no such document');
 }
     
    }).catch((error)=> {
 console.log('error getting document:', error);
    });

    return userinfo;
  }
  const geturl= async () => {
    return 


    


  }
  const uploadMedia = ()=>{
    const uploadTask = fire.storage.ref(`Post_Media/${postMedia.name}`).put(postMedia);
    setupload(uploadTask);
    console.log(upload);
    uploadTask.on(
      'state_changed',
      snapshot => {
       
        
      },
      error => {
        console.log(error);
      },
      ()=> {
     fire.storage.ref("Post_Media")
    .child(postMedia.name).getDownloadURL()
    .then( url => {
      setMUrl(url);
   return url;
      
    })
      }
    )
    
    
    console.log("a",Murl, urls);
    return 'url';
  }
  
  const handleCreate =  useCallback(
    async event => {
 
 event.preventDefault();
 const {title,description} = event.target.elements;
 console.log(title.value,description.value);
if(title.value !== '' || description !== ''){
try {

let Title = title.value;
let Description = description.value;

console.log(title.value,description.value);
let Post ={
  Information:Description,
  Title:Title,
  userid:userid,
  media:'',
    media_type:'',
    mediaName:'',
Media_url:'',
  username:  userinfo.username,
  comments:'0',
  likes:'0'
};
console.log(Post, "userinfo:",userinfo);
if(postMedia!=null){
  
 
   uploadMedia();

 await  fire.storage.ref("Post_Media").child(postMedia.name).getDownloadURL().then( url => {
     console.log(url);
  Post ={
    Information:Description,
    Title:Title,
    userid:userid,
    media:true,
      media_type:postMedia.type,
      Media_url:url,
mediaName:postMedia.name,
    username:  userinfo.username,
    comments:'0', 
    likes:'0'
  };

console.log('true' ,Post);

});

await fire.db.collection('post2').add({

  UsersPost : Post
  
});
}else {
await fire.db.collection('post2').add({

  UsersPost : Post
  
});
}
  


  console.log(Post);
Swal.fire({
  title: 'success',
  text: 'Post Created Successfully',
  icon: 'success',
  confirmButtonText: 'OK'
})
history.push("/");

}catch(error){
  console.log(error)
  Swal.fire({
    title: 'Error!',
    text: 'an Error has Occured:' + error.message,
    icon: 'error',
    confirmButtonText: 'ok'
  })
}
}else {
  Swal.fire({
    title: 'warning',
    text: 'please add a title or Post Information',
    icon: 'warning',
    confirmButtonText: 'OK'
  });

}
  });

        return (
            <div>{userProfile!=null? <div>
              <br/>
              <br/>
              <br/>

<br/>

          <div >   
                <h5 class=" info-color white-text text-center py-4">
    <strong>MAKE A Post</strong>
    
</h5>
</div>

         <section class="container">
             


<form onSubmit={handleCreate}>
	
	<div class="form-group">
		<label class="legend-top">
			<input type="text" name="title" placeholder="Title" />
			<span></span>
		</label>
	</div>

		<span class="section-header">Post Comment</span>
        <textarea id="textarea" class="form-control mb-4" name="description" placeholder="Post Information"></textarea>

<div className="position">
        <div id="file-upload-form" class="uploader">
  <input id="file-upload" type="file" name="fileUpload" onChange={handleChange} accept="image/*,video/*" />

  <label for="file-upload" id="file-drag">
    <img id="file-image" src="#" alt="Preview" class="hidden"/>
    <div id="start">
      <i class="fa fa-download" aria-hidden="true"></i>
      <div>{display} </div>
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
</div>  

{/* <span class="section-header">Socials</span>
{inputList.map((x, i) => {
        return (
          <div>
        
<div>
<label class="sr-only" for="inlineFormInputGroup"></label>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text"><i class="fab fa-lg fa-at">@</i></div>
        </div>
        <input type="text" class="form-control py-0"  name="SocialLink"
              placeholder="Enter links to you wouls like for post"
              value={x.SocialLink} id="inlineFormInputGroup"   onChange={e => handleInputChange(e, i)}/>
      </div>
      </div>
         
            <div className="btn-box">
              {inputList.length - 1 === i && <button class="btn btn-primary" onClick={handleAddClick}> <i class="fas fa-plus ml-1"></i></button>
}
{inputList.length !== 1 && <button class="btn btn-danger" onClick={() => handleRemoveClick(i)}><i class="fas fa-trash ml-1 "></i></button>}

            </div>
         </div>
        );
      })} */}
<br/>

<button class="btn btn-info btn-block my-4" type="submit">Post</button>
<br/>
<br/>

</form>


         
</section>
</div> :''}
</div>
            
        );
    
}

export default PostForm;
