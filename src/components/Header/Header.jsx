// import React from 'react';

import { signOut } from "firebase/auth";
import { Avatar, Button, Dropdown, Navbar, Tooltip } from "flowbite-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {

    const {auth}=useContext(AuthContext)
    const handleSignOut=()=>{
      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    }
    const {loggeduser}=useContext(AuthContext)

    return (
        <div className="max-w-[1280px] mx-auto border-b-2">
           <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="https://flowbite.com/">
    <span className="self-center whitespace-nowrap lg:text-2xl text-xl font-semibold dark:text-white">
      ItalianFoodies
    </span>
  </Navbar.Brand>

  <Navbar.Collapse>
    <ActiveLink
      to="/"
      active={true}
      
    >
      <span className='text-xl'>Home</span>
    </ActiveLink>
    <ActiveLink
    
     to="/aboutus">
       <span className='text-xl'>About Us</span>
      
    </ActiveLink>
    <ActiveLink
    
    to="/blogs">
      <span className='text-xl'>Blogs</span>
      
    </ActiveLink>
    <ActiveLink
    className='text-xl'
    to="/contact">
      <span className='text-xl'>Contacts</span>
    </ActiveLink>
  </Navbar.Collapse>
  <div className="flex md:order-2 mr-[20px] items-center">

    {loggeduser?.photoURL?  <Tooltip
    content={loggeduser.displayName}
    placement="bottom"
  ><img className="h-[50px] w-[50px] rounded-[50%]" src={loggeduser.photoURL}></img></Tooltip>:loggeduser?<Tooltip
  content={loggeduser.displayName}
  placement="bottom"
><img className="h-[50px] w-[50px] rounded-[50%]" src='https://th.bing.com/th/id/OIP.Ghae4OEdb4UmC3hkqpFvLAHaGd?w=221&h=193&c=7&r=0&o=5&pid=1.7'></img></Tooltip>:''}
    {loggeduser?.displayName?<span className="font-bold mr-2">{loggeduser.displayName}</span>:null}  
    {loggeduser?<Button onClick={handleSignOut}>Logout</Button>:<Link to='/login'><Button>Login</Button></Link>}
    <Navbar.Toggle />
  </div>
</Navbar>
        </div>
    );
};

export default Header;