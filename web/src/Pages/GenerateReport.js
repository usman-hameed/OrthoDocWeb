import React from 'react';
import { useState ,useEffect} from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from 'react-router-dom';
import {authentication} from '../firebase-config';
import { useLocation } from 'react-router-dom';
import { FaFileMedical } from "react-icons/fa";
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
    <div className='view'>Report</div>
 <div className='reportt'> <FaFileMedical style={{fontSize:60,marginLeft:530,marginTop:30,color:"gray"}}/>
   <p  style={{ display: 'flex' ,justifyContent: 'center',fontSize:30,marginTop:30}}> <p style={{fontWeight:'bold',fontFamily:'Arial, Helvetica, sans-serif'}}>X-ray uploaded by:</p> </p><p  style={{ display: 'flex' ,justifyContent: 'center',fontSize:30,marginTop:10 ,fontFamily:'Arial, Helvetica, sans-serif'}}>{email}</p>
   <p  style={{ display: 'flex' ,justifyContent: 'center',fontSize:30,marginTop:35}}> <p style={{fontWeight:'bold',fontFamily:'Arial, Helvetica, sans-serif'}}>Results Generated:</p></p><p  style={{ display: 'flex' ,justifyContent: 'center',fontSize:30,marginTop:-5 ,fontFamily:'Arial, Helvetica, sans-serif',paddingLeft:25,paddingRight:20}}>{test}</p>


</div>   
    </Sidebar>
       
      
    
    </>)
}
export default Report;