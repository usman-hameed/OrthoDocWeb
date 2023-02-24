import React, {useState} from 'react';
import {Alert } from "react-bootstrap";
//import Login from './Login';
import {Link} from 'react-router-dom';
import Footer from '../Components/Footer';
import image from "../images/logo.jpeg";

import { doc, setDoc } from 'firebase/firestore';

import { db, authentication } from '../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


function Registration() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [flag, setFlag] = useState(false);


  async function handleSingnUp(e) {
    e.preventDefault();
    try {
    await createUserWithEmailAndPassword(authentication, email, password)
      

          addData();
         alert("User Created Successfully!");
         navigate('/login');


    }
    catch(error){
      alert(error.message)
    }
  };

  const addData = () => {


    const myDoc= doc(db, 'users',email);
    
    const docData = {
      "displayName": name,
      "email": email,
      "password": password,
      "phoneNumber": phone,
    };
    
    setDoc(myDoc, docData).then(() => {
      console.log('Document written with ID: ', myDoc.id);
    }).catch((error) => {
      console.error('Error adding document: ', error.message);
      alert(error.message)
    })
  
  
    };

  return (<>
    <div className='reg-main'> <Footer/>
    <div className="logo-image"> <img src={image} alt="loading..."  style={{width:1100 ,height:300, marginLeft:20, marginTop:100}} /> </div> 
    <div className='reg-inner'>

            <form onSubmit={handleSingnUp}>
              <h3 className="heading">Patient's Registration</h3>

              <div className="reg-group">
                <label className='reg-label'>Name</label>
                <input
                  type="text"
                  className="reg-control"
                  placeholder="Enter Full Name"
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required="true"
                />
              </div>

              <div className="reg-group">
                <label className='reg-label'>Email</label>
                <input
                  type="email"
                  className="reg-control"
                  value={email}
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                  required="true"
                />
              </div>

              <div className="reg-group">
                <label className='reg-label'>Password</label>
                <input
                  type="password"
                  className="reg-control"
                  value={password}
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                  required="true"
                />
              </div>

              <div className="reg-group">
                <label className='reg-label'>Phone No.</label>
                <input
                  type="Phone"
                  className="reg-control"
                  value={phone}
                  placeholder="Enter contact no"
                  onChange={(event) => setPhone(event.target.value)}
                  required="true"
                />
              </div>
              <div>
              
              <button type="submit" className="reg-button">
                Register
              </button></div>
              <div>
            <Link className='reg-link' to='/login'> Already registered? Login </Link>
               </div>
            
              {flag && (
                <Alert color="primary" variant="danger">
                  Please fill out all the fields!
                </Alert>
              )}
            </form>
        </div>
        </div></>

  )
    
}

export default Registration
