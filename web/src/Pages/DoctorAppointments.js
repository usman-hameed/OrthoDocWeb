// import React from 'react';
// import {  useEffect, useState } from "react";

// import DoctorSidebar from './DoctorSidebar';
// // import { useLocation } from 'react-router-dom';
// import { db,authentication } from '../firebase-config';
// import { collection, getDocs, where, query } from 'firebase/firestore';
// import { useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


// function DoctorAppointments(){
//   const [appointments, setAppointments] = useState([]);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(()=>{
//     get();
//   }, [])

//   async function getAppointments(){
//     const list =[];
//     const docRef = await getDocs(query(collection(db, 'appointments'),where('doctorId', '==', `${authentication.currentUser?.email}`),where('status', '==', `active`)));
//       docRef.forEach((each)=>{
//         list.push( {id:each.id, ...each.data()});
//       })
//       setAppointments(list);
//       console.log("Arr",appointments);
//       return list;
//   };

//   async function get(){
//     const selectedAppointments = await getAppointments();
//   }


   
// return( <>
//  <DoctorSidebar>
//     <div className="search-main">
//       <div className="search-heading">View Appointments</div>  
//       <div className='app-h'>  <div className='doc-email'>Patient email</div> <div className='app-date'>Appointment Date</div> <div className='app-time'>Appointment Time</div>  <div className='app-status'>Appointment Status</div></div> 
      
//       {
//          appointments.map((slot)=>
//          <div className='app-main'> <div className='id-app'>{slot.patientId}</div>  <div className='slot-time'>{slot.timeSlot} </div> <div className='slot-date'> { new Date(slot.date.seconds*1000).toDateString()  } </div> <div className='slot-status'> {slot.status}  </div> </div>
//          )

//       }
//              </div></DoctorSidebar>
//     </>
// )

// }   
// export default DoctorAppointments;  



import React from 'react';


import {
  CgProfile
}from "react-icons/cg";
import DoctorSidebar from './DoctorSidebar';
// import { useLocation } from 'react-router-dom';
import { db,authentication } from '../firebase-config';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import useSWR from 'swr';


function DoctorAppointments(){
  const navigate = useNavigate();
  const location = useLocation();

  const {data:appointments, error} = useSWR('view-appointments', async ()=>{
    const list =[];
      const docRef = await getDocs(query(collection(db, 'appointments'),where('doctorId', '==', `${authentication.currentUser?.email}`),where('status', '==', `active`)));
      docRef.forEach((each)=>{
        list.push( {id:each.id, ...each.data()});
      })
      return list;
  }, {refreshInterval: 1000})


  if(!appointments){
    return <div style={{position:'fixed', top: '50%', left:'50%'}}>Loading</div>
  }

    if( error){
      console.log(error)
    }



   
return( <>
 <DoctorSidebar>
    <div className="search-main">
      <div className="search-heading">View Appointments</div>  
        <div className='app-h'> 
          <div className='doc-email'>
            Patient email
          </div> 
          <div className='app-date'>
            Date
          </div> 
          <div className='app-time'>
           Time
          </div>  
          <div className='app-status'>
            Status
          </div>
          <div className='app-actions'>
            Actions
          </div>
          
      </div> 
      
      {  
         appointments.map((slot)=>
         <div className='app-main'> <div className='id-app'>{slot.patientId}</div>

         <div className='slot-time'>{slot.timeSlot} </div> <div className='slot-date'> { new Date(slot.date.seconds*1000).toDateString()  } 
         </div> 
         <div 
         className={`${slot.status === 'active' && 'slot-status-active'} ${slot.status === 'deleted' && 'slot-status-deleted'} ${slot.status === 'completed' && 'slot-status-completed'}`}> 
         {slot.status}  
         </div> 
         <div className='slot-actions'>
          <button className='slot-btn-1' onClick={() => navigate('/viewDoctorProfile', { state: { id: slot.patientId } })}><CgProfile style={{height:'45px', width: '45px', marginLeft:20}}  /></button>


         </div>
         </div>
         )

      }
             </div></DoctorSidebar>
    </>
)

}
export default DoctorAppointments;