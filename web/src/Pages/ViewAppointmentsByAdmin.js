import React from 'react';
import {  useEffect, useState } from "react";

import AdminSidebar from './AdminSidebar';
// import { useLocation } from 'react-router-dom';
import { db} from '../firebase-config';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function ViewAppointmentsByAdmin(){
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(()=>{
    get();
  }, [])

  async function getAppointments(){
    const list =[];
    const docRef = await getDocs(query(collection(db, 'appointments')));
      docRef.forEach((each)=>{
        list.push( {id:each.id, ...each.data()});
      })
      setAppointments(list);
      console.log("Arr",appointments);
      return list;
  };

  async function get(){
    const selectedAppointments = await getAppointments();
  }


   
return( <>
 <AdminSidebar>
    <div className="search-main">
      <div className="search-heading">View Appointments</div>   
      <div className='app-hh'>  <div className='docc-email'>Booked for</div> <div className='pat-email'>Booked by</div> <div className='appp-date'>Appointment Date</div> <div className='appp-time'>Appointment Time</div>  <div className='appp-status'>Appointment Status</div></div> 
      
      {
         appointments.map((slot)=>
      <div className='appp-main'>   <div className='id-appp'>{slot.doctorId}</div> <div className='pat-id'>{slot.patientId} </div>  <div className='slott-time'>{slot.timeSlot} </div>  <div className='slott-date'> { new Date(slot.date.seconds*1000).toDateString()  } </div> <div 
      className={`${slot.status === 'active' && 'slot-status-activee'} ${slot.status === 'deleted' && 'slot-status-deletedd'} ${slot.status === 'completed' && 'slot-status-completedd'}`}> 
      {slot.status}  
      </div> </div>
         


         )

      }
             </div></AdminSidebar>
    </>
)

}
export default ViewAppointmentsByAdmin;