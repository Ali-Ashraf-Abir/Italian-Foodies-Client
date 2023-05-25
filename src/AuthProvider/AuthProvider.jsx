import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import app from '../components/Firebase/Firebase.config';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { GithubAuthProvider } from "firebase/auth";
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const gitprovider = new GithubAuthProvider();





export const AuthContext=createContext(null)
const auth=getAuth(app)
const provider = new GoogleAuthProvider();





const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true)

    const[loggeduser,setloggedUser]=useState(null)
    const[alreadyError,SetAlreadyError]=useState(null)
    const[signinError,setSigninError]=useState(null)
    const [registrationSuccess,SetRegistrationSuccess]=useState(null)
    const handleGoogleSignin = () => {


        if(!loggeduser){
        setLoading(true)
        signInWithPopup(auth, provider)
          .then((result) => {

            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...

            setloggedUser(user)

          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
 
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });}
        
        else{
            SetAlreadyError('already Logged in,Please logout first')
        }
    
    
      }


      const handleSignin=(email,password)=>{

        return signInWithEmailAndPassword(auth, email, password)
      
      }
      //observe authstate change
      useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            
            setloggedUser(currentUser)
            setLoading(false)
        })
        return()=>{
            return unsubscribe()

        }
      },[])

      const handleGithubLogin =()=>{
        signInWithPopup(auth, gitprovider)
        .then((result) => {

    
          const user = result.user;

          setloggedUser(user)
          console.log(user)
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          
          setSigninError(errorMessage)
          
        });
      }






    const authInfo={
        user:null,
        auth,
        handleGoogleSignin,
        alreadyError,
        handleSignin,
        signinError,
        loggeduser,
        handleGithubLogin,
        setSigninError,
        setloggedUser,
        provider,
        SetAlreadyError,
        setLoading,
        loading,
        SetRegistrationSuccess,
        registrationSuccess


    }
    return (

            <AuthContext.Provider value={authInfo}
            
            >{children}
            </AuthContext.Provider>


    );
};

export default AuthProvider;