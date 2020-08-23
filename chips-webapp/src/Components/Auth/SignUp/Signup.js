import React , { useCallback, useState }  from 'react';
import util from './css/util.css';
import main from './css/main.css';
import File from  './images/profile.png';
import f from './images/icons/favicon.ico';
import s from './fonts/Linearicons-Free-v1.0.0/icon-font.min.css';
import  o from'./images/icons/icon-google.png';
import  y from "./fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import fire from '../../../Config/Fire';
import {Link, withRouter } from "react-router-dom";



const Signup = ({  history	 }) => {


	
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [cpassword, setCpassword] = useState('');

const [firstname, setFirstname] = useState('');
const [lastname, setLastname] = useState('');
const [username, setUsername] = useState('');

const [FnameValidation, setFnameValidation] = useState('');
const [LnameValidation, setLnameValidation] = useState('');
const [EmailValidation, setEmailValidation] = useState('');
const [passwordValidation, setPasswordValidation] = useState('');
const [confirmpassword, setConfirmpassword] = useState('');
const [Validation, setValidation] = useState('');


const clearForm = () => {

	setEmail('');
	setFirstname('');
	setLastname('');
	setPassword('');
	setCpassword('');
}
 const validate = (email,password,cpassword,firstname,lastname) => {


let fnameValidation = "";
let lnameValidation = "";
let emailValidation = "";
let PasswordValidation = "";
let Confirmpassword  = "";
let validation = "";

if(firstname.value == ''){
console.log(firstname.value);
	fnameValidation = ": please enter firstname";

}
if(lastname.value ==''){
	console.log('name'+lastname.value);
lnameValidation = ": please enter lastname"
}
if(password.value ==''){
console.log('p ' + password.value)
	PasswordValidation = ": please enter password";

}

if(cpassword.value ==''){
 console.log('cp '+ cpassword.value)
	Confirmpassword = ": please enter password";

}

if (password.value != cpassword.value) {
console.log('c cp '+ password.value)
validation =" Password Does not match";
	
}


if (!(/@stu.ncu.edu.jm\s*$/.test(email.value))) {
	console.log(email.value + ": "+ password.value);
	console.log("it does not match  @stu.ncu.edu.jm");
	emailValidation = ": invalid email. Not a valid NCU email";

}

if(emailValidation || PasswordValidation || Confirmpassword || validation ||fnameValidation || lnameValidation){
console.log('validating');
	setEmailValidation(emailValidation); 
	setFnameValidation(fnameValidation);
	setLnameValidation(lnameValidation);
	setValidation(validation);
	setPasswordValidation(passwordValidation);
	setConfirmpassword(Confirmpassword);
	console.log('test');
	
	return false;
}




return true;


};


const handleSignUp = useCallback( async event => {

event.preventDefault();
console.log('starting ');


try{
	const {email, password,cpassword,firstname,lastname} = event.target.elements;
	
	const isValid  = validate(email,password,cpassword,firstname,lastname);
 if(isValid == true){
 
console.log('get data'+ firstname.value);
   await fire.auth.createUserWithEmailAndPassword(email.value,password.value);

   console.log('created Email Auth');
	

//    let buckeyname = 'profilePhoto';
//    let storage = fire.storage.ref(`${buckeyname}/${fire.auth.currentUser.uid}`);
//    let uploadtask = storage.put(File); 
//    console.log('added file');
   
//    let downloadURL;
//   await uploadtask.on(fire.storage().TaskEvent.STATE_CHANGED,()=>{
   
// 	downloadURL = uploadtask.snapshop.downloadURL
   
//    });
//    console.log('store file');


 

  await fire.db.collection('Students').doc(fire.auth.currentUser.uid).set({
	   username:email.value.match(/^([^@]*)@/)[1], 
	   firstname:firstname.value,
	   lastname:lastname.value,
	   Description:'',
	   email:email.value,
	   Membership:['CHIPS'],
	   SocialLinks:[email.value],
	   photourl:'',
	  
   
   });
 
   console.log('created User ');
 history.push("/");
 }
}catch(error){
    alert(error)
}

   }

,[history]);



 
        return (
            <div>

<link rel="icon" type="image/png" href={f}/>


                <link rel="icon" type="image/png" href={f}/>

<link rel="stylesheet" type="text/css" href={y}/>

                
	<div class="limiter">
		<div class="container-login100" style={{backgroundImage: "url('images/bg-01.jpg')"}}>
			<div class="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
				<form class="login100-form validate-form flex-sb flex-w" onSubmit={handleSignUp}>
					<span class="login100-form-title p-b-53">
						Sign Up With the Republic
					</span>

					
					<div class="p-t-31 p-b-9">
						<span class="txt1">
							First Name <span  style={{color:'red',fontSize:12}} class="txt1">{FnameValidation}</span> 
						</span>
					</div>
					<div class="wrap-input100 validate-input" data-validate = "Username is required">
						<input class="input100" type="text" name="firstname" value={firstname} onChange={e => setFirstname(e.target.value)} />
						<span class="focus-input100"></span>
					</div>
					
				


					<div class="p-t-31 p-b-9">
						<span class="txt1">
							Last name <span  style={{color:'red',fontSize:12}} class="txt1">{LnameValidation}</span> 
						</span>
					</div>
					<div class="wrap-input100 validate-input" data-validate = "Username is required">
						<input class="input100" type="text" name="lastname" value={lastname} onChange={e => setLastname(e.target.value)}/>
						<span class="focus-input100"></span>
					

					</div>
				

					<div class="p-t-31 p-b-9">
						<span class="txt1">
							Email <span  style={{color:'red',fontSize:12}} class="txt1">{EmailValidation}</span> 

						</span>
					 	
					</div>


					<div class="wrap-input100 validate-input" data-validate = "Username is required">
						<input class="input100" type="text" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
						<span class="focus-input100"></span>
					</div>
				


					<div class="p-t-13 p-b-9">
						<span class="txt1">
							Password <span  style={{color:'red',fontSize:12}} class="txt1">{passwordValidation}</span> 
						</span>

					
					</div>
					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<input class="input100" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
						<span class="focus-input100"></span>
					</div>
				


					<div class="p-t-13 p-b-9">
						<span class="txt1">
							Confirm Password <span  style={{color:'red',fontSize:12}} class="txt1">{confirmpassword}</span> <span  style={{color:'red',fontSize:12}} class="txt1">{Validation}</span> 
						</span>

					</div>
					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<input class="input100" type="password" name="cpassword" value={cpassword} onChange={e => setCpassword(e.target.value)} />
						<span class="focus-input100"></span>
					</div>

					<div class="container-login100-form-btn m-t-17">
						<button class="login100-form-btn"  type="submit">
							Sign up
						</button>
					</div>

					<div class="w-full text-center p-t-55">
						<span class="txt2">
							 a member?
						</span>
						<Link class="txt2 bo1" to={{ pathname: '/login'}}>Login</Link>
					
					</div>
				</form>
			</div>
		</div>
	</div>
	

	<div id="dropDownSelect1"></div>
            </div>
        );
    }


export default withRouter(Signup);
