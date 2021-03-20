import React, { useContext, useState } from 'react';
import './FormSignUp.css';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../../firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const FormSignUp = () => {
    const [newUser, setNewUser] = useState(true)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } }

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        error: '',
        errorPassword:''
    });
    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordNumber;
        }
       if((e.target.name==="password")!==(e.target.name==="confirm_password")){
        const passwordValidation = { ...user };
        passwordValidation.errorPassword = "password dont match";
        console.log("not match")
        setUser(passwordValidation);
       }

        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();


        if (user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(result => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = " ";
                    setUser(newUserInfo);
                    console.log(result.user)
                    const { displayName, email } = result.user;
                    const signedInUser = {
                        name: user.name,
                        email: email
                    }
                    updateUserName(user.name);
                    setLoggedInUser(signedInUser);
                    history.replace(from)
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    setUser(newUserInfo);
                });
        }

        if (newUser === false && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((result) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = " ";
                    setUser(newUserInfo);
                    updateUserName(user.name);
                    const { displayName, email } = result.user;
                    const signedInUser = {
                        name: displayName,
                        email: email
                    }
                    setLoggedInUser(signedInUser);
                    console.log(signedInUser);
                    history.replace(from)
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo)
                });
        }

    }
    const updateUserName = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name

        })
            .then(function () {
            })
            .catch(function (error) {
                console.log(error)
            });
    }

    const handleNewUser = () => {
        setNewUser(!newUser)
    }
    return (

        <div className="form-signup text-center">
            {
                newUser ? <h3 className="mb-4">Create Account</h3> : <h3 className="mb-4">LogIn</h3>
            }



            <form onSubmit={handleSubmit}>
                {
                    newUser === true && <>
                        <input type="text" name="name" placeholder="Enter Your Name" onBlur={handleBlur} required /> <br />
                        <input type="email" name="email" placeholder="Enter Your Email" onBlur={handleBlur} required /> <br />
                        <small style={{ color: 'red' }}>{user.error}</small>
                        <input type="password" id="password" name="password" placeholder="Password" onBlur={handleBlur} required /> <br />
                        <input type="password" id="confirm_password" name="confirm_password" placeholder="Confirm Password" onBlur={handleBlur} required /> <br />
                        <small style={{ color: 'red' }}>{user.errorPassword}</small>
                        <input type="submit" value="Create Account" />
                    </>
                }
                {
                    newUser === false && <>
                        <input type="email" name="email" placeholder="Enter Your Email" onBlur={handleBlur} required /> <br />
                        <input type="password" name="password" placeholder="Password" onBlur={handleBlur} /> <br />
                        <input type="submit" value="Login" />
                    </>
                }

            </form>
            <p>{newUser ? 'Already have an acconut?' : 'I have no account '} <span><button onClick={handleNewUser} className="login-btn">{newUser ? 'Login' : 'Create Account'}</button></span></p>
        </div>

    );
};

export default FormSignUp;