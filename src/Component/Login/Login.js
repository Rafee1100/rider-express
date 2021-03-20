import React from 'react';
import FormSignUp from '../FormSignUp/FormSignUp';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
import './Login.css'
const Login = () => {
 return (
 <div className="d-flex justify-content-center flex-column align-items-center pt-3">
        <FormSignUp/>
        <br/>
        <h6><span>OR</span></h6>
        <GoogleSignIn/>
    </div>
 );
};
export default Login;