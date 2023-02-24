import React, {useState, useEffect} from 'react';
import {Alert } from "react-bootstrap";
import {Link} from 'react-router-dom';
import Footer from '../Components/Footer';
import image from "../images/logo.jpeg";
import { doc, setDoc } from 'firebase/firestore';
import { db, authentication } from '../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import geocoder from 'geocoder';

function DoctorRegistration() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [des, setDes] = useState("");
  const [loc, setLoc] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
 // const [time, settime] = useState("");
  const [flag, setFlag] = useState(false);
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [stat, setStat] = useState(true);
  async function handleSingnUp(e) {
    e.preventDefault();

    try {
      if(stat==false){
        console.log("No lat and long")
        alert("Location is Needed for SignUp")
        return
      }
    await createUserWithEmailAndPassword(authentication, email, password)
    if(stat==false){
      console.log("No lat and long")
      alert("Location is Needed for SignUp")
      return
    }

          addData();
         alert("User Created Successfully!");
         navigate('/doctorLogin');


    }
    catch(error){
      alert(error.message)
    }
  };


  useEffect(()=>{
    getLoc();
  }, [])


  async function getLoc(){
  //   Geocode.setApiKey("AIzaSyDYMgcikHNKGRMJOFnGpLNvvUFsxB9PnvM");
    
  
  // Geocode.fromLatLng("48.8583701", "2.2922926").then(
  //   (response) => {
  //     const address = response.results[0].formatted_address;
  //     console.log(address);
  //   },
  //   (error) => {
  //     console.error(error);
  //   }
  // );
  try{

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getcords,showError );
    } else {
      alert("Geolocation is not supported by this browser.");
    }

  }
  catch(e){
    console.log(e);
  }
  
    
  };
  function showError(error) {
    switch(error.code) {
      
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        setStat(false);
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        setStat(false);
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        setStat(false);
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        setStat(false);
        break;
    }
  }

async function getcords(position){
  try{
    console.log(position);

    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
    console.log(lat);
    console.log(long);
    // let address = await navigator.geolocation.reverseGeocodeAsync(position.coords);

    let address =geocoder.reverseGeocode( 33.7489, -84.3789, function ( err, data ) {
      console.log(data);
    });

    console.log(address);
  }
  catch(e){
    console.log(e);
  }

}




  const addData = () => {


    const myDoc= doc(db, 'doctors',email);
    
    const docData = {
      "displayName": name,
      "email": email,
      "password": password,
      "phoneNumber": phone,
      "description":des,
      "startTime":startTime,
      "endTime":endTime,
      
    };
    setDoc(myDoc, docData).then(() => {
      console.log('Document written with ID: ', myDoc.id);
    }).catch((error) => {
      console.error('Error adding document: ', error.message);
      alert(error.message)
    })
      
  
    };
  return (
  <>
    <div className='d-reg-main'> <Footer/>
    <div className="logo-image"> <img src={image} alt="loading..."  style={{width:1100 ,height:300, marginLeft:20, marginTop:100}} /> </div> 
    <div className='d-reg-inner'>

            <form onSubmit={handleSingnUp}>
              <h3 className="heading">Doctor's Registration</h3>

              <div className="d-reg-group">
                <label className='d-reg-label'>Name</label>
                <input
                  type="text"
                  className="reg-control"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                  required="true"
                />
              </div>

              <div className="d-reg-group">
                <label className='d-reg-label'>Email</label>
                <input
                  type="email"
                  className="reg-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                  required="true"

                />
              </div>
              

              <div className="d-reg-group">
                <label className='d-reg-label'>Password</label>
                <input
                  type="password"
                  className="reg-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                  required="true"
                />
              </div>

              <div className="d-reg-group">
                <label className='d-reg-label'>Phone No.</label>
                <input
                  type="Phone"
                  className="reg-control"
                  placeholder="Enter contact no"
                  onChange={(event) => setPhone(event.target.value)}
                  required="true"
                />
              </div>
             <div className="d-reg-group">
                <label className='d-reg-label'>Description</label>
                <textarea   className="reg-control"
                  placeholder="Write about yourself.."
                  onChange={(event) => setDes(event.target.value)}
                  required="true"
        
      />
              </div>


              <div className="d-reg-group">
                <label className='d-reg-label'>Clinic Address</label>
                <input
                  type="location"
                  className="reg-control"
                  placeholder="Enter your clinic address"
                  onChange={(event) => setLoc(event.target.value)}
                  required="true"
                  
                />
              </div>

              {/* <img src={'https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=12&size=400x400&maptype=roadmap&key=YOUR_API_KEY'}/> */}
              <div className="d-reg-group">
              
              <label className='d-reg-label' for="start">Start Time:
              <input    className="reg-control" type="time" id="start" name="start" onChange={(event) => setStartTime(event.target.value)}   required="true" />
              </label>
              <label  className='d-reg-label' for="end">End Time:
              <input     className="reg-control"  type="time" id="end" name="end" onChange={(event) => setEndTime(event.target.value)}   required="true"/>
              </label>


              </div>
              
              <div>
              <button type="submit" className="d-reg-button">
                Register
              </button></div>
              <div>
            <Link className='d-reg-link' to='/doctorLogin'> Already registered? Login </Link>
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

export default DoctorRegistration
