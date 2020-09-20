import React, { Component } from 'react';
import './detail.css';
class PostDetail extends Component {
    render() {
      const Post = () =>{
return (

<div class=" text-center">

{/* <!-- Title --> */}
<h4 class="card-title h4 pb-2"><strong>My adventure</strong></h4>

{/* <!-- Card image --> */}
<div class="view overlay my-4">
  <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" class="img-fluid" alt=""/>
  <a href="#">
    <div class="mask rgba-white-slight"></div>
  </a>
</div>

<h5 class="indigo-text h5 mb-4">Photography</h5>

<p class="card-text">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>

{/* <!-- Linkedin --> */}
<a class="fa-lg p-2 m-2 li-ic"><i class="fab fa-linkedin-in grey-text"></i></a>
{/* <!-- Twitter --> */}
<a class="fa-lg p-2 m-2 tw-ic"><i class="fab fa-twitter grey-text"></i></a>
{/* <!-- Dribbble -->/ */}
<a class="fa-lg p-2 m-2 fb-ic"><i class="fab fa-facebook-f grey-text"></i></a>

<hr/>

</div>

);
      }
      const Comments =() => {

return (
<div>
  <br/>

<div class="jumbotron panel panel-white post">
            <div class="post-heading">
                <div class="pull-left image">
                    <img src="http://bootdey.com/img/Content/user_1.jpg" class="img-circle avatar" alt="user profile image"/>
                </div>
                <div class="pull-left meta">
                    <div class="title h5">
                        <a href="#"><b>Saikat Sinha</b></a>
                    </div>
                    <h6 class="text-muted time">10 minutes ago</h6>
                </div>
            </div> 
            <hr/>
            <Post/>
            <div class="post-description"> 
                <p>It’s through mistakes that you actually can grow. You have to get bad in order to get good.</p>
                <div class="stats">
                    <a href="#" class="btn btn-default stat-item">
                        <i class="fa fa-thumbs-up icon"></i>20
                    </a>
                    <a href="#" class="btn btn-default stat-item">
                        <i class="fa fa-share icon"></i>12
                    </a>
                    <a href="#" class="btn btn-default stat-item">
                        <i class="fa fa-pencil-square-o"></i>
                    </a>
                    <a href="#" class="btn btn-danger stat-item">
                        <i class="fa fa-times"></i>
                    </a>
                </div>
            </div>
            <div class="post-comments">
                <div class="input-group"> 
                    <input class="form-control comment-input" placeholder="Add a comment..." type="text"/>
                    <span class="input-group-addon">
                        <a href="#"><i class="fa fa-check"></i></a>  
                    </span>
                </div>
                
              <ul class="comments-list">
                    <li class="comment">
                        <a class="pull-left" href="#">
                            <img class="avatar" src="http://bootdey.com/img/Content/user_1.jpg" alt="avatar"/>
                        </a>
                        <div class="comment-body">
                            <div class="comment-heading">
                                <h4 class="user">Gavino Free</h4>
                            </div>
                            <p>Sure, oooooooooooooooohhhhhhhhhhhhhhhh</p>
                          <div class="task-panel">
                            
                              <a href="#" class="btn btn-default btn-xs">
                                <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                              </a>
                              <a href="#" class="btn btn-default btn-xs">
                                <i class="fa fa-reply" aria-hidden="true"></i>
                              </a>
                               <a href="#" class="btn btn-default btn-xs">
                                 <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                               </a>
                              <a href="#" class="btn btn-danger btn-xs">
                                <i class="fa fa-times" aria-hidden="true"></i>
                              </a>                           
                            </div>
                        </div>
                        <ul class="comments-list">
                            <li class="comment">
                                <a class="pull-left" href="#">
                                    <img class="avatar" src="http://bootdey.com/img/Content/user_3.jpg" alt="avatar"/>
                                </a>
                                <div class="comment-body">
                                    <div class="comment-heading">
                                        <h4 class="user">Ryan Haywood</h4>
                                    </div>
                                    <p>Relax my friend</p>
                                  <div class="task-panel">
                            
                                    <a href="#" class="btn btn-default btn-xs">
                                      <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                                    </a>
                                    <a href="#" class="btn btn-default btn-xs">
                                      <i class="fa fa-reply" aria-hidden="true"></i>
                                    </a>
                                     <a href="#" class="btn btn-default btn-xs">
                                       <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                     </a>
                                    <a href="#" class="btn btn-danger btn-xs">
                                      <i class="fa fa-times" aria-hidden="true"></i>
                                    </a>                           
                                  </div>
                                </div>
                            </li> 
                            <li class="comment">
                                <a class="pull-left" href="#">
                                    <img class="avatar" src="http://bootdey.com/img/Content/user_2.jpg" alt="avatar"/>
                                </a>
                                <div class="comment-body">
                                    <div class="comment-heading">
                                        <h4 class="user">Gavino Free</h4>
                                    </div>
                                    <p>Ok, cool.</p>
                                  <div class="task-panel">
                            
                                    <a href="#" class="btn btn-default btn-xs">
                                      <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                                    </a>
                                    <a href="#" class="btn btn-default btn-xs">
                                      <i class="fa fa-reply" aria-hidden="true"></i>
                                    </a>
                                     <a href="#" class="btn btn-default btn-xs">
                                       <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                     </a>
                                    <a href="#" class="btn btn-danger btn-xs">
                                      <i class="fa fa-times" aria-hidden="true"></i>
                                    </a>                           
                                  </div>
                                </div>
                            </li> 
                        </ul>
                    </li>
                </ul>
              
            </div>
        </div>


</div>
);
      };
        const Comment = () => { 
            return(
            <div>
              <div class="md-form md-outline">
                <textarea id="form75" class="md-textarea form-control" rows="3"></textarea>
                <label for="form75">Comment</label>
              </div>
              <button type="button" class="btn btn-secondary">Post</button>
              </div>
          )
        };
      
      
        return (
            <div class="container">


<Comments/>



            </div>
        );
    }
}

export default PostDetail;
