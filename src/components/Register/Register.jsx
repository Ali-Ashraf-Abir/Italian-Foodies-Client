import { createUserWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { faEnvelope, faSignIn } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import toast, { Toaster } from 'react-hot-toast';


const Register = () => {

  const { auth,SetRegistrationSuccess,registrationSuccess } = useContext(AuthContext)
  const [success,setSuccess]=useState(null)
  const [error,setError]=useState(null)
  const navigate=useNavigate()

  const Register = (event) => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    const name = form.name.value
    const url=form.url.value
    console.log(email, password, name)
    setSuccess(null)
    setError(null)
    SetRegistrationSuccess(null)
    if(password.length<6){
      setError('your password length must be more than 6')
      return
    }
    if(!password || !email){
      setError('you must fill up the email and password field')
      return
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {

        const User = result.user

        console.log(User)
        updateProfile(auth.currentUser, {
          displayName: name, photoURL: url
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
        

        setSuccess("registration Successfull")
        SetRegistrationSuccess('Registered Successfully please Login now')
        toast('registration successful')
        form.reset
        signOut(auth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });
        navigate('/login')

      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorMessage)
        setError(errorMessage)
      });

  }



  return (
    <div>
      <div className='max-w-[600px] mx-auto min-h-[70vh]'>
        <Toaster></Toaster>

        <form onSubmit={Register} className="flex flex-col gap-4 mt-[10%] bg-gray-200 p-12">
          <div className="text-center text-3xl">Please Register</div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="name1"
                value="Your name"
              /></div>
              <TextInput
                id="name1"
                type="text"
                name="name"
                placeholder="Enter your Username"
                required={true}
              />
              <div className="mb-2 block">
              <Label
                htmlFor="Url"
                value="Your image url"
              /></div>
              <TextInput
                id="Url"
                type="text"
                name="url"
                placeholder="Enter your Photourl"
              />
              <div className="mb-2 block">
              <Label
                htmlFor="email1"
                value="Your email"
              /></div>
            
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
              <p>Already have an id?<Link to='/login' className='text-blue-500'>Login here</Link></p>
            </div>
          </div>

          <Button type="submit">
            Register
          </Button>

          <div className="text-green-500">
            {success?success:''}
          </div>
          <div className="text-red-500">
            {error?error:''}
          </div>


        </form>


      </div>
    </div>
  );
};

export default Register;