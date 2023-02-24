import React, { useState } from 'react';
import {
    FaBars,
    FaHome,
    FaRegCommentDots,
    FaEye,
    FaCloudUploadAlt,
    FaCommentAlt,
    FaEdit,
    FaPhoneAlt,
    FaVideo,
}from "react-icons/fa";
import { TiChevronRight } from "react-icons/ti";
import{MdLogout} from "react-icons/md";
import { NavLink } from 'react-router-dom';
const Sidebar =  ({children})=> {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);  
    const barItem=[
        {
            path:"/home",
            name:"Home",
            icon:<FaHome/>
        },
        {
            path:"/messenger",
            name:"Chats",
            icon:<FaRegCommentDots/>
        },

     
        {
            path:"/uploadxray",
            name:"Upload X-ray",
            icon:<FaCloudUploadAlt/>
        },
        {
            path:"/videos",
            name:"Exercise Videos",
            icon:<FaVideo/>,
            subNav: [
                {
                  
                  path: "/videos/squats",
                  name:"Squats",
                  icon: <TiChevronRight />,
                },
                {
                  path: "/videos/sit-stand",
                  name:"Sit Stand",
                  icon: <TiChevronRight />,
                },
              ],
            
        },
        {
            path:"/PatientAppointments",
            name:"My Appointments",
            icon:<FaEye/>
        },
        {
            path:"/feedback",
            name:"Feedback",
            icon:< FaCommentAlt/>
        },
        {
            path:"/profile",
            name:"Profile",
            icon:<FaEdit/>
        },
        {
            path:"/contactus",
            name:"Contact Us",
            icon:<FaPhoneAlt/>
        },
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

