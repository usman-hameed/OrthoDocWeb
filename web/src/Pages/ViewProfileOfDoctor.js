import React from 'react';
import AdminSidebar from "./AdminSidebar";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { FaUserMd } from "react-icons/fa";

function ViewProfileOfDoctor() {
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
            <AdminSidebar>
                <div className="main-main">
                    <div className="search-heading">View Doctor Profile</div>
                   
                    {users.map((item, key) => (
                        item.address.map(
                            (itm, k) => (   
                                <div className='view-main-a'>
                                            <div className='profile-v'> <FaUserMd/></div>
                                   <p className='markk'>Dr. {item.displayName ?? item.name}</p>
                                   <p style={{marginLeft:19, display: 'flex' ,justifyContent: 'center'}}> {item.description ?? item.description}</p>
                                    <p  style={{ display: 'flex' ,justifyContent: 'center'}}> <p style={{fontWeight:'bold'}}>Email address:</p> {mail}</p>
                                    <p  style={{ display: 'flex' ,justifyContent: 'center'}}> <p style={{fontWeight:'bold'}}>Phone No:</p> {item.phoneNumber ?? item.contact}</p>
                                    
                                    <p  style={{ display: 'flex' ,justifyContent: 'center'}}> <p style={{fontWeight:'bold'}}>Street number:</p> {itm[0].streetNumber}</p>
                                    <p  style={{ display: 'flex' ,justifyContent: 'center'}}> <p style={{fontWeight:'bold'}}>District:</p> {itm[0].district}</p>
                                    <p  style={{ display: 'flex' ,justifyContent: 'center'}}> <p style={{fontWeight:'bold'}}>City:</p> {itm[0].city}</p>
                                    <p  style={{ display: 'flex' ,justifyContent: 'center'}}> <p style={{fontWeight:'bold'}}>Region:</p>{itm[0].region}</p>
 
                                  
                                </div>


                            )
                        )
                    ))}

                </div>
            </AdminSidebar>

        </>

    )
}
export default ViewProfileOfDoctor; 