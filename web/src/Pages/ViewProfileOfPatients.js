import React from 'react';
import AdminSidebar from "./AdminSidebar";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { FaUserCircle } from "react-icons/fa";
function ViewProfileOfPatients() {
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
            <AdminSidebar>
                <div className="main-main">  
                    <div className="search-heading">View Profile Of Patients</div>
                    {users.map((item, key) => ( 
                        
                                <div className='view-patient-main-a'>
                                     <div className='profile-v'> <FaUserCircle/></div>
                                    <p className='markk'>{item.displayName ?? item.name}</p>
                                    <p style={{ display: 'flex' ,justifyContent: 'center'}}><p style={{fontWeight:'bold'}}>Email address:</p> {mail}</p>
                                    <p style={{ display: 'flex' ,justifyContent: 'center'}}><p style={{fontWeight:'bold'}}>Phone No:</p> {item.phoneNumber ?? item.contact}</p>
                                  
                                </div>                    
                    ))}
    

                    

                </div>
            </AdminSidebar>

        </>

    )
}
export default ViewProfileOfPatients; 