import React, { useState } from 'react';
import {
    FaBars,
    FaEye

}from "react-icons/fa";
import{MdLogout,MdImageSearch} from "react-icons/md";
import { NavLink } from 'react-router-dom';
const Sidebar =  ({children})=> {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);  
    const barItem=[
        {
            path:"/adminHome",
            name:"View Doctors",
            icon:<MdImageSearch/>
        },
        {
            path:"/adminViewPatient",
            name:"View Patients",
            icon:<MdImageSearch/>
        },
        {
            path:"/viewFeedbacks",
            name:"View Feedbacks",
            icon:<FaEye/>
        },
        {
            path:"/admin/viewAppointments",
            name:"View Appointments",
            icon:<FaEye/>
        },
        // {
        //     path:"/deleteUser",
        //     name:"Delete User",
        //     icon:<FaUserMinus/>

        // },
        {
            path:"/logout",
            name:"Logout",
            icon:<MdLogout/>
        }
        
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "500px" : "150px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">OrthoDoc</h1>
                   <div style={{marginLeft: isOpen ? "130px" : "15px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   barItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link"  activeclassName="active" >
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}}  className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    
 );
};

export default Sidebar

