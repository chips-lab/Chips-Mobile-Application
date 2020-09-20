import React, { useCallback, useContext,useState } from 'react';
import './css/util.css';
import './css/main.css';
import font2 from './fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import icon from './images/icons/favicon.ico';
import image2 from "./images/img-01.png";
import GoogleSignIn from  '../GoogleAuth';
import {Link,withRouter,Redirect   } from "react-router-dom";
import fire from '../../../Config/Fire';
import {Authentication, AuthContext} from '../../../Config/Auth';
import Swal from 'sweetalert2';



const Login = ({history}) =>{
  
const [error,setError] = useState('');
	const handleLogin = useCallback ( async event => {

		event.preventDefault();

		const {email, password} = event.target.elements;

	try {


		await fire.auth.signInWithEmailAndPassword(email.value,password.value);
        history.push("/");
    }catch(error){
		console.log(error);
		setError("password or email address does not matched");
    

	}
},[history]);
	
const {currentUser} = useContext(AuthContext);
if(currentUser) {
	return <Redirect to="/" />
}


        return (
            <div>
                
	<link rel="icon" type="image/png" href={icon}/>
	<link rel="stylesheet" type="text/css" href={font2}/>
	


              




                <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-pic " data-tilt>
					<img src={image2} alt="IMG"/>
				</div>
				<hr/>

				<form class="login100-form validate-form" onSubmit={handleLogin}>
					<span class="login100-form-title">
						CHIPS Login
					</span>

					<GoogleSignIn/>
					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="email" name="email" placeholder="Email"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<input class="input100" type="password" name="password" placeholder="Password"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div class="container-login100-form-btn">
						<button class="login100-form-btn" type="submit">
							Login
						</button>
					</div>
					<div class="p-t-31 p-b-9">
						<span class="txt1">
							 <span  style={{color:'red',fontSize:12}} class="txt1">{error}</span> 

						</span>
					 	
					</div>
			 		<div class="text-center p-t-12">
						<span class="txt1">
							Forgot
						</span>
						<a class="txt2" href="#">
							Username / Password?
						</a>
					</div>

					
					<div class="text-center p-t-136">
					<Link class="txt2 " to={{ pathname: '/signup'}}> 	
					Create your Account
					<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i></Link>
					
					</div>
				</form>
			</div>
		</div>
	</div>
	
	

	







            </div>
        );
    
}

export default withRouter(Login);
