import React from 'react';
import { useState ,useEffect} from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from 'react-router-dom';
import {authentication} from '../firebase-config';
import { useLocation } from 'react-router-dom';

function Report(){
    const location = useLocation();
    const [test, setTest] = useState(location.state.id);
 
const email=authentication.currentUser?.email;

console.log("Current User",email)

    const navigate = useNavigate();
    useEffect(()=>{
        if(!authentication.currentUser){
            navigate('/login');
            alert("Please Login first")
            return <div className='splash'>
                Loading
            </div>
        }
    },[])

 

    return(<>
    <Sidebar>
   <div className='reportt'> 
{test} {email}
</div>  
    </Sidebar>
       
      
    
    </>)
}
export default Report;