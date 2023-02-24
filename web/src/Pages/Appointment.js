import { useState } from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import './Calender.css';
import './Clock.css';
import { useNavigate } from 'react-router-dom';
import {  useEffect } from "react";
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';
import { db,authentication } from '../firebase-config';

import moment from 'moment';
import { collection, getDocs, where, query } from 'firebase/firestore';


function Appointment() {

  const navigate = useNavigate();
  const location = useLocation();
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [slots, setSlots] = useState([]);
  const [selectedAppointments, setSelectedAppointments] = useState([]);



  useEffect(()=>{
    if(!authentication.currentUser){
      navigate('/login');
      return <div className='splash'>
          Loading
      </div>
  }else{
    getSlots();
  }
  },[])

  useEffect(()=>{
    getSlots();
  }, [date])

  async function getAppointments(){
    const list =[];
      const docRef = await getDocs(query(collection(db, 'appointments'),where('doctorId', '==', `${location.state.id}`),where('status', '==', `active`)));
      docRef.forEach((each)=>{
        list.push( {id:each.id, ...each.data()});
      })
      return list;
  };

  async function getSlots(){
    let list = [];
    let x = {
        slotInterval: 30,
        openTime: location.state.startTime,
        closeTime: location.state.endTime
      };
    let startTime = moment(x.openTime, "HH:mm");
    let endTime = moment(x.closeTime, "HH:mm").add(0, 'days');
    const now = new Date();
    const current = now.getHours() + ':' + now.getMinutes();
    while (startTime < endTime) {
      if(current.localeCompare(startTime.format("HH:mm")) === 1 && now.getDay() === date.getDay()){
        startTime.add(x.slotInterval, 'minutes');
      }else{
        list.push(startTime.format("HH:mm"));
        startTime.add(x.slotInterval, 'minutes');
      }
      }
      const selectedAppointments = await getAppointments();


      for(let i = 0; i<selectedAppointments.length; i++){
        const index = list.indexOf(selectedAppointments[i].timeSlot);
        const d = new Date(selectedAppointments[i].date.seconds*1000).toDateString();
        const sel = new Date(date).toDateString();
        const check = d === sel;
        if(index !== -1 && check){
          list.splice(index, 1);
        }
      }
    
    setSlots(list);
    console.log("Slots",list);
}
  function nextStep(){
    if(!date || !time){
      alert("Please select date or time")
      return;
    }
    navigate('/stripeContainer', { state: { id: location.state.id, name:location.state.name,patientId:authentication.currentUser?.email, date: date, timeSlot: time }})

  }
  const tileDisabled = ({ activeStartDate, date, view }) => {
    return  date.getDay() === 0 
    
 }
  return (<><Sidebar>
    <div className='search-main'>
      <div className='search-heading'>Appointment</div>
      <div className='calendar-container'>
         <h1 className='date-heading'>Select Date</h1>
        <Calendar tileDisabled={tileDisabled} minDate={new Date()} maxDate={new Date(Date.now()+7*24*60*60*1000)} onChange={setDate} value={date} />
      </div>
      <div className="selected-date">
      Selected date: {date.toDateString()}
   </div>
          <div className='time-container'>
          <h1 className='time-heading'>Select Time</h1>
          </div>
          <div className="selected-time">

      <div className='timeslots'>
        { 
          slots.map((slot)=>
          <button className={`btn_slot ${slot===time && 'btn-selected'}`} onClick={()=>setTime(slot)}>{slot}</button>
          )
        }</div>
   </div>


          <button className="Appointment-button"  onClick={nextStep}
      >
       <h5 className="book">Book Appointment</h5>
      </button>




    </div></Sidebar>
    </> );
}

export default Appointment;