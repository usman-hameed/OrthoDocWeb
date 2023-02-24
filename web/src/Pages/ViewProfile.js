import React from 'react';
import Sidebar from "./Sidebar";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import { db,authentication } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


import { FaUserMd } from "react-icons/fa";


function ViewProfile() {
    const email = authentication.currentUser?.email;

    const navigate = useNavigate();
    const location = useLocation();
    const [users, setUsers] = useState([]);

    const [mail, setMail] = useState(location.state.id);
    const fetchData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "doctors"));
            querySnapshot.forEach((doc) => {
                if (mail === doc.data().email) {
                    setUsers((prev) => [...prev, doc.data()]);
                }
            });
        } catch (err) {
            console.log(err);
        }
    };
    
    
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
            <Sidebar>
                <div className="main-main">
                    <div className="search-heading">View Profile</div>
                    
                    {users.map((item, key) => (
                        item.address.map(
                            (itm, k) => (
                                <div className='view-main'>
                                   <div className='profile-v'> <FaUserMd/></div>
                                   <p className='markk'>Dr. {item.displayName ?? item.name}</p>
                                   <p style={{marginLeft:-10, display: 'flex' ,justifyContent: 'center',fontSize:29}}> {item.description ?? item.description}</p>
                                    <p  style={{ display: 'flex' ,justifyContent: 'center',fontSize:29}}> <p style={{fontWeight:'bold'}}>Email address:</p> {mail}</p>
                                    <p  style={{ display: 'flex' ,justifyContent: 'center',fontSize:29}}> <p style={{fontWeight:'bold'}}>Phone No:</p> {item.phoneNumber ?? item.contact}</p>
                                    <p  style={{ display: 'flex',justifyContent: 'center',fontSize:29}}> <p style={{fontWeight:'bold'}}>Clinic Time:</p> {item.startTime ?? item.startTime}  To    {item.endTime ?? item.endTime}</p>    
                                    <p  style={{ display: 'flex' ,justifyContent: 'center',fontSize:29}}> <p style={{fontWeight:'bold'}}>Street number:</p> {itm[0].streetNumber}</p>
                                    <p  style={{ display: 'flex' ,justifyContent: 'center',fontSize:29}}> <p style={{fontWeight:'bold'}}>District and City:</p> {itm[0].district}  {itm[0].city}</p>
          
                                    <p  style={{ display: 'flex' ,justifyContent: 'center',fontSize:29}}> <p style={{fontWeight:'bold'}}>Region:</p>{itm[0].region}</p>

                                    <button onClick={() => navigate('/message', { state: { docid: mail , userid:authentication.currentUser?.email ,current:"patient"} })} type="submit" className="c-button">
                                        Chat
                                    </button>
  <button type="submit" className="b-button" onClick={() => navigate('/appointment', { state: { id: mail, startTime: item.startTime, endTime: item.endTime, name:item.displayName ?? item.name } })}> 

                                    
                                        Book Appointment
                                    </button>
                                </div>


                            )
                        )
                    ))}

                </div>
            </Sidebar>

        </>

    )
}
export default ViewProfile; 