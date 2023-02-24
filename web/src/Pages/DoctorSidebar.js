import React, { useState } from 'react';
import {
    FaBars,
    FaHome,
    FaRegCommentDots,
    FaEye,
    FaCommentAlt,
    FaEdit,
    FaPhoneAlt
}from "react-icons/fa";
import{MdLogout} from "react-icons/md";
import { NavLink } from 'react-router-dom';
const DoctorSidebar =  ({children})=> {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);  
    const barItem=[
        {
            path:"/doctorHome",
            name:"Home",
            icon:<FaHome/>
        },
        {
            path:"/doctorMessenger",
            name:"Chats",
            icon:<FaRegCommentDots/>
        },
        {
            path:"/viewAppointments",
            name:"View Appointments",
            icon:<FaEye/>
        },
     
       
        {
            path:"/doctorFeedback",
            name:"Feedback",
            icon:< FaCommentAlt/>
        },
        {
            path:"/doctorProfile",
            name:"Profile",
            icon:<FaEdit/>
        },
        {
            path:"/doctorContactus",
            name:"Contact Us",
            icon:<FaPhoneAlt/>
        },
        {
            path:"/doctorLogout",
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

export default DoctorSidebar

