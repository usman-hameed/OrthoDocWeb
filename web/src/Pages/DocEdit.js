import React from 'react';
import {useState, useEffect} from 'react';
import { Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import DoctorSidebar from "./DoctorSidebar";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db, authentication } from '../firebase-config';
import {useNavigate} from "react-router-dom"
const auth = getAuth();
function DocEdit (){ 

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [newpassword, setnewPassword] = useState("");
   const [phone, setPhone] = useState("");
   const[state,setState]=useState("");

   onAuthStateChanged(auth, (user) => {
     
    const uem = user.email;
    setEmail(uem);    
    
}
);

 function readData  () {

  // e.preventDefault();
  console.log("Read Data");

  const myDoc= doc(db, 'doctors',authentication.currentUser.email);
  console.log("Read Data");
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

    function update(e) {
        readData();
      e.preventDefault();
      console.log("In Update");
      const myDoc= doc(db, 'doctors',authentication.currentUser.email);
      console.log("Password is"+ authentication.currentUser.password);
      if(newpassword===""){
        console.log("In If Statememnt");
        setnewPassword(password);
        console.log("Passcode "+password)
        console.log("Passcode "+newpassword)
      }
      const data={
        "displayName":name,
        // "password":newpassword,
        "phoneNumber":phone,
      }
      updateDoc(myDoc,data).then(() => {
          alert("Update Successfull");
  
    
        }).catch((error) => {
          console.error('Error adding document: ', error.message);
          
        })
      
    }
  
   return(< >
    <DoctorSidebar>

   <div onLoadStart={readData} className='profile-main'>
    <div className="profile-heading"> Profile Settings</div> 
    <div className='sub-main'>
    <Form  onSubmit={update}>  

    <fieldset>     
              <div className='form'>
              
                <label className='label'>Name</label><br></br>
                
                <input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  type='name'
                  className="input"
                  required
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
                  value={newpassword}
                  onChange={e => setnewPassword(e.target.value)}
                  type='password'
                  className='input'
                  required
                />
              </div> */}
              <div className='form'>
                <label className='label'>Phone Number</label>
                <input
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  type='phone'
                  className='input'
                  required
                />
              </div>
              <div>
              <Link to='/Profile'>
              <button type='submit' className='update-button' onClick={update}>
                Update your profile
              </button></Link></div>
           </fieldset>
          </Form>
          </div>
   </div></DoctorSidebar></>

   )
}
 
export default DocEdit
