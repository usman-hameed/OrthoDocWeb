import React from "react";
import Sidebar from './Sidebar';
import{MdLocationOn} from "react-icons/md";
import{MdPhone} from "react-icons/md";
import{MdEmail} from "react-icons/md";
import { authentication } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
function ContactUs () {
  const navigate = useNavigate();
  useEffect(()=>{
      if(!authentication.currentUser){
          navigate('/login');
          return <div className='splash'>
              Loading
          </div>
      }
  },[])


    return (<>
    <Sidebar>
    <div className="main-main">
      <div className="search-heading">Contact Us</div> 
      <div className="contactus-text">
      -- CONTACT INFORMATION --
      </div>
      <div className="contactus-icons"><MdLocationOn/> Comsats University,Islamabad<br/><br/>
      <MdPhone/> +92155093841<br/><br/>
      <MdEmail/> sadialiaquat988@gmail.com</div>
      <h1 className="endline"> ___________________________________________</h1>
             </div></Sidebar>
            </>
    )
    }
export default ContactUs