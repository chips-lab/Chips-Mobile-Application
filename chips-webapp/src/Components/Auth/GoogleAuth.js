import React, { Component } from 'react';

class GoogleAuth extends Component {
    
    render() {

        const style = {
            marginTop:"7px",
             marginRight:"8px",
             color:'White'
             
        };
        const style2 = {
            textTransform:"none"
        }; 
        return (
            <div>

                <div class="">
		<button class="login100-form-btn"> <img width="20px" style={style} alt="Google sign-in" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
     Google</button> 
     </div>

   <hr/>
            </div>
        );
    }
}

export default GoogleAuth;
