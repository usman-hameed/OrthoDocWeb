import React from 'react';
import {useState, useEffect} from 'react';
import { Form } from 'react-bootstrap';

import Sidebar from "./Sidebar";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db, authentication } from '../firebase-config';
import {Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom"
const auth = getAuth();
function Profile (){ 
  const navigate = useNavigate();
  useEffect(()=>{
      if(!authentication.currentUser){
          navigate('/login');
          alert("Please Login First");
          return <div className='splash'>
              Loading
          </div>
      }
  },[])
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
  console.log("Read Data");

  const myDoc= doc(db, 'users',authentication.currentUser.email);
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
      e.preventDefault();
      console.log("In Update");
      const myDoc= doc(db, 'users',authentication.currentUser.email);
      const data={
        displayName:name,
        // password:password,
        phoneNumber:phone,
      }
      updateDoc(myDoc,data).then(() => {
          alert("Update Successfull");
  
    
        }).catch((error) => {
          console.error('Error adding document: ', error.message);
          
        })
      
    }
  
   return(< >
    <Sidebar>

   <div className='profile-main'>
    <div className="profile-heading"> Profile Settings</div> 
    <div className='sub-main'>
    <Form >  

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
                <Link to='/Edit'>
              <button type='submit' className='update-button'>
                Edit your profile
              </button></Link></div>
           </fieldset>
          </Form>
          </div>
   </div></Sidebar></>

   )
}
 
export default Profile
