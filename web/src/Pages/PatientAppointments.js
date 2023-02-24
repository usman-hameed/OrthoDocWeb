import React from 'react';


import {
  AiOutlineDelete
}from "react-icons/ai";

import {
  CgProfile
}from "react-icons/cg";
import Sidebar from './Sidebar';
// import { useLocation } from 'react-router-dom';
import { db,authentication } from '../firebase-config';
import { collection, getDocs, where,doc, updateDoc, query } from 'firebase/firestore';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import useSWR from 'swr';


function PatientAppointments(){
  const navigate = useNavigate();
  const location = useLocation();

  const {data:appointments, error} = useSWR('view-appointments', async ()=>{
    const list =[];
      const docRef = await getDocs(query(collection(db, 'appointments'),where('patientId', '==', `${authentication.currentUser?.email}`)));
      docRef.forEach((each)=>{
        const timeLeft = (each.data().date.seconds-(new Date().getTime()/1000 ));
        if(timeLeft<0){
          updateDoc(doc(db, 'appointments', each.id),{
            status:'completed'
          })
        }
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

  async function deleteAppointment(id, status, paymentId){
    if(status !== 'active'){
      alert('Cannot delete appointment at this stage!');
      return;
    }   
    try{
      await axios.post("https://server-ten-ruby.vercel.app/api/refund", {
                paymentId: paymentId          
                })
      await updateDoc(doc(db, 'appointments', id),{
        status: 'deleted'
      })
    }catch(e){
      alert(e.message)
    }
  }


   
return( <>
 <Sidebar>
    <div className="search-main">
      <div className="search-heading">View Appointments</div>  
        <div className='app-h'> 
          <div className='doc-email'>
            Doctor email
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
         <div className='app-main'> <div className='id-app'>{slot.doctorId}</div>

         <div className='slot-time'>{slot.timeSlot} </div> <div className='slot-date'> { new Date(slot.date.seconds*1000).toDateString()  } 
         </div> 
         <div 
         className={`${slot.status === 'active' && 'slot-status-active'} ${slot.status === 'deleted' && 'slot-status-deleted'} ${slot.status === 'completed' && 'slot-status-completed'}`}> 
         {slot.status}  
         </div> 
         <div className='slot-actions'>
          <button className='slot-btn-1' onClick={() => navigate('/viewProfile', { state: { id: slot.doctorId } })}><CgProfile style={{height:'45px', width: '45px'}}  /></button>
          <button className='slot-btn-2' onClick={()=>deleteAppointment(slot.id, slot.status, slot.paymentId)}><AiOutlineDelete style={{height:'45px', width: '45px'}} /></button>

         </div>
         </div>
         )

      }
             </div></Sidebar>
    </>
)

}
export default PatientAppointments;