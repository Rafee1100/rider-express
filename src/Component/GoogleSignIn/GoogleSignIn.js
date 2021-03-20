import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../../firebase.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './GoogleSignIn.css'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


        if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        } else {
        firebase.app();
        }
    const GoogleSignIn = () => {
        const [loggedInUser, setLoggedInUser]=useContext(UserContext)
        const history = useHistory();
        const location = useLocation();
        const { from } = location.state || { from: { pathname: "/" } }
        const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
        .then((result) => {
        const{displayName,email} = result.user;
        const signedInUser={
        name:displayName,
        email:email
        }
        setLoggedInUser(signedInUser);
        history.replace(from)
        }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.log(email, errorMessage, errorCode, credential)
        });
        }
 return (
    <div>
            <button className="google-btn btn-lg"
            onClick={handleGoogleSignIn}><FontAwesomeIcon className="google-icon"
            icon={faGoogle} />Sign with google</button>
    </div>
 );
};
export default GoogleSignIn;