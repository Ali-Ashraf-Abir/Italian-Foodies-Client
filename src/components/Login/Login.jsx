import { faEnvelope, faSignIn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signInWithPopup } from 'firebase/auth';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';







const Login = () => {

 const navigate=useNavigate()
 const location=useLocation()
 const from=location.state?.from?.pathname || '/'

  const { setLoading,auth,alreadyError,signinError,handleSignin,handleGithubLogin,setloggedUser,setSigninError,loggeduser,provider,SetAlreadyError,registrationSuccess,SetRegistrationSuccess } = useContext(AuthContext)



 const signIn=(event)=>{
  
  SetAlreadyError('')
  setSigninError('')
  event.preventDefault()
  const form=event.target
  const email=form.email.value 
  const password=form.password.value 
  setLoading(true)
  handleSignin(email,password)
 
  .then((userCredential) => {
    // Signed in 
   
    const user = userCredential.user;
    setloggedUser(user)
    SetRegistrationSuccess(null)
    navigate(from, {replace:true})
    window.scrollTo(0, 0)
    
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    setSigninError(errorMessage)
  });



 }
 const handleGoogleSignin = () => {
  SetAlreadyError('')
  setSigninError('')
  if(!loggeduser){
  signInWithPopup(auth, provider)
    .then((result) => {

      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...

      setloggedUser(user)
      navigate(from, {replace:true})
      window.scrollTo(0, 0)

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



  return (
    <div className='max-w-[600px] mx-auto min-h-[70vh] bg-gray-200 p-12 mt-[50px]'>

      <form onSubmit={signIn} className="flex flex-col gap-4 mt-[10%]">
        {(registrationSuccess)?<span className='text-center text-green-500'>{registrationSuccess}</span>:''}
        <div className="text-center text-3xl">Please Login</div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email1"
              value="Your email"
            />
          </div>
          <TextInput
            id="email1"
            type="email"
            name="email"
            placeholder="Enter your Email"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password1"
              value="Your password"
            />
          </div>
          <TextInput
            id="password1"
            type="password"
            name="password"
            placeholder='enter your password'
            required={true}
          />
          <div className="">
            <p>Dont have an id?<Link to='/register' className='text-blue-500'>Register here</Link></p>
          </div>
        </div>

        <Button type="submit">
          Login
        </Button>

        <div className="flex justify-around">
          <div>
            <Button onClick={handleGoogleSignin} color="gray">
              <FontAwesomeIcon icon={faEnvelope} />
              Sign in with Google
            </Button>
          </div>
          <p>or</p>
          <div>
            <Button onClick={handleGithubLogin} color="gray">
              <FontAwesomeIcon icon={faSignIn} />
              Sign in with Github
            </Button>
          </div>
        </div>
        <div>{alreadyError?alreadyError:''}</div>
        <div>{signinError?signinError:''}</div>
      </form>
    </div>
  );
};

export default Login;
