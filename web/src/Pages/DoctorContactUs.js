import React from "react";
import DoctorSidebar from './DoctorSidebar';
import{MdLocationOn} from "react-icons/md";
import{MdPhone} from "react-icons/md";
import{MdEmail} from "react-icons/md";
function DoctorContactUs () {

    return (<>
    <DoctorSidebar>
    <div className="main-main">
      <div className="search-heading">Contact Us</div> 
      <div className="contactus-text">
      -- CONTACT INFORMATION --
      </div>
      <div className="contactus-icons"><MdLocationOn/> Comsats University,Islamabad<br/><br/>
      <MdPhone/> +92155093841<br/><br/>
      <MdEmail/> sadialiaquat988@gmail.com</div>
      <h1 className="endline"> ___________________________________________</h1>
             </div></DoctorSidebar>
            </>
    )
    }
export default DoctorContactUs