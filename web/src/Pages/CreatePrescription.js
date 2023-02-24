import React from 'react';
import DoctorSidebar from './DoctorSidebar';
import { useState } from "react";
function CreatePrescription(){
  const [data,setData]=useState();
  function handleclick(e) {
    e.preventDefault();}
return( <>
 <DoctorSidebar>
    <div className="main-main">
      <div className="search-heading">Create Prescription</div> 
      <div className='prescription-container'>
<div className='upload-prescription'>
<h3 style={{marginTop:15, marginLeft:170}}>Create prescription and send it to the patient</h3>
<input id='imgs' type="file" className='input' accept="image/png, image/jpeg/doc" style={{fontSize:30 ,marginLeft:250, marginTop:70}}  onChange={(e)=>setData(e.target.files)} />
<div>
<button className='uploadPrescription-button'type='submit' onClick={handleclick}><h5 className='Upload'>Send Prescription</h5></button>
</div></div> 

      </div>
             </div></DoctorSidebar>
    </>
)

}
export default CreatePrescription;