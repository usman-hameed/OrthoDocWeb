import React from 'react';
import DoctorSidebar from "./DoctorSidebar";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import { db ,authentication} from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
function ViewDoctorProfile() {
    const navigate = useNavigate();
    const location = useLocation();
    const [users, setUsers] = useState([]);
    const [mail, setMail] = useState(location.state.id);
    console.log(location.state.id);
    const fetchData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "users"));
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
            <DoctorSidebar>
                <div className="main-main">     
                    <div className="search-heading">View Profile</div>
                    {users.map((item, key) => (
                        
                                <div className='view-patient-main'>
                                      <div className='profile-v-doc'> <FaUserCircle/></div>
                                      <p className='markk'>{item.displayName ?? item.name}</p>
                                    <p style={{ display: 'flex' ,justifyContent: 'center'}}><p style={{fontWeight:'bold'}}>Email address:</p> {mail}</p>
                                    <p style={{ display: 'flex' ,justifyContent: 'center'}}><p style={{fontWeight:'bold'}}>Phone No:</p> {item.phoneNumber ?? item.contact}</p>
                                  

                                    <button  onClick={() => navigate('/doctorMessage', { state: { docid:authentication.currentUser?.email , userid:mail ,current:"doctor"} })}  type="submit" className="c-patient-button">
                                        Chat
                                    </button>
                                    {/* <button type="submit" className="b-patient-button">
                                        Book Appointmnet
                                    </button> */}
                                </div>


                            
                        
                    ))}


                    

                </div>
            </DoctorSidebar>

        </>

    )
}
export default ViewDoctorProfile; 