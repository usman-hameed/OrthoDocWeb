import React from 'react';
import {useState, useEffect} from 'react';
import { Form } from 'react-bootstrap';

import DoctorSidebar from "./DoctorSidebar";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db, authentication } from '../firebase-config';
import {Link} from 'react-router-dom';
const auth = getAuth();
function Profile (){ 

   const [name, setName] = useState("");
   
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [phone, setPhone] = useState("");
   const[state,setState]=useState("");
   useEffect(() => {
    onAuthStateChanged(auth, (user) => {
     
      const uem = user.email;
      setEmail(uem);    
      
      readData();
      
  }
  );
}, []);


 function readData  () {

  // e.preventDefault();


  console.log();

  const myDoc= doc(db, 'doctors',authentication.currentUser.email);
  console.log("Read Data after doc");
    //snapshot method
      getDoc(myDoc).then((snapshot) => {
        if(snapshot.exists){
          setName(snapshot.data().displayName);

          // setMail(snapshot.data().email);
          setPhone(snapshot.data().phoneNumber);
          // setPassword(snapshot.data().password);
  
        }
        else{
          alert("No Data Found");
        }
  
      }).catch((error) => {
        console.error('Error adding document: ', error.message);
      })
    };

  
   return(< >
    <DoctorSidebar>

   <div className='profile-main'>
    <div className="profile-heading"> Profile Settings</div> 
    <div className='sub-main'>
    <Form>  

    <fieldset>     
              <div className='form'>
              
                <label className='label'>Name</label><br></br>
                
                <input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  type='name'
                  className="input"
                  disabled
                />
              </div>
              <div className='form'>
                <label className='label'>Email address</label>
                <input 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  type='email'
                  className='input'
                  disabled
                />
              </div>
              {/* <div className='form'>
                <label className='label'>Password</label>
                <input
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  type='password'
                  className='input'
                  disabled
                />
              </div> */}
              <div className='form'>
                <label className='label'>Phone Number</label>
                <input
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  type='phone'
                  className='input'
                  disabled
                />
              </div>
              <div>
                <Link to='/DocEdit'>
              <button type='submit' className='update-button'>
                Edit your Doc profile
              </button></Link></div>
           </fieldset>
          </Form>
          </div>
   </div></DoctorSidebar></>

   )
}
 
export default Profile
