import React, { Component } from 'react';

class GoogleAuth extends Component {
    
    render() {

        const style = {
            marginTop:"7px",
             marginRight:"8px"
        };
        const style2 = {
            textTransform:"none"
        }; 
        return (
            <div>

                <div class="col s12 m6 offset-m3 center-align">
    <a class="oauth-container btn darken-4 white black-text" href="/users/google-oauth/" style={style2}>
        <div class="left">
            <img width="20px" style={style} alt="Google sign-in" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
        </div>
        Login with Google
    </a>
</div>
            </div>
        );
    }
}

export default GoogleAuth;
