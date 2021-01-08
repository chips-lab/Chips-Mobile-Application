import React, { useEffect,useState } from 'react';
import Swal from 'sweetalert2';
import '../Nav/mobile.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams, 
    Redirect
  } from "react-router-dom";

  import fire from '../../Config/Fire';

const  MobileNav = (props) => {
    const [userid,setUserid] = useState('');
    useEffect(() => {
     
    setUserid( props.userid);
     
    });
  

     const Logout =()=>{

        fire.auth.signOut();
        Swal.fire({
            title: 'warning',
            text: 'Logging out',
            icon: 'warning',
            confirmButtonText: 'OK'
          })
       
        return <Redirect to="/" />
       
         }


   
        return (
            <div >
               {  props.userid !=  undefined ?   

               <div>
                 <br/>
                 <br/>
<nav class="mdc-bottom-navigation mdc-bottom-navigation--fixed sticky">
  <ul class="mdc-bottom-navigation__actions">
    <li class="mdc-bottom-navigation__action mdc-bottom-navigation__action--active">
      <Link  to={{ pathname: '/', state:{userid :userid,title:"Make"}}}>

        <i class="material-icons mdc-bottom-navigation__icon" aria-hidden="true">
          
        </i>

        <span class="mdc-bottom-navigation__label">
          Work Experience
        </span>
      </Link>
    </li>

    <li class="mdc-bottom-navigation__action">
    <Link  to={{ pathname: '/Resource', state:{userid}}}>
        <i class="material-icons mdc-bottom-navigation__icon" aria-hidden="true">
         spa
        </i>

        <span class="mdc-bottom-navigation__label">
        Resources
        </span>
        </Link>
    </li>

    <li class="mdc-bottom-navigation__action">
      <a  onClick={Logout}>
        <i class="material-icons mdc-bottom-navigation__icon" aria-hidden="true">
          school
        </i>

        <span class="mdc-bottom-navigation__label">
          LogOut
        </span>
      </a>
    </li>
  </ul>
</nav>
</div>

: ''} 
              

            </div>
        );
   
}

export default MobileNav;
