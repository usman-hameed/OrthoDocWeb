/*import React from 'react';
import AdminSidebar from './AdminSidebar';
import FeedbackDetail from './FeedbackDetail';
import { useState , useEffect } from "react";
//import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from '../firebase-config';
import { collection, doc, getDocs } from 'firebase/firestore';
function ViewFeedbacks(){
  var Doctors=[];
    const [data, setData] = useState([]);
    //const [email, setEmail]=useState([]);
    //const [query, setQuery] = useState('');
    useEffect(() => {
      const querySnapshot = getDocs(collection(db, "Ratings")).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log("Feedbacks",doc.id, " => ", doc.data());
          const response = doc.data();
          //const email=doc.data().email;
          Doctors.push(response);
         // setEmail(prev=>[...prev,email])
          setData(prev=>[...prev,response])
          // setPatient(Users);
          // Alert.alert("LoggedIn as Doctor");
          // setDoc("False");
          //console.log("SEARCH RESULTS==="+Doctors)
      });console.log("Doctor's Array :",Doctors)   
      }); 
  }, []);

return( <>
 <AdminSidebar>
    <div className="search-main">
      <div className="search-heading">View Feedbacks</div> 
<div className='feedback-header'>
  <div className='user-email'><h2 style={{color:"rgb(200, 200, 200)", marginLeft:20}}>User's Email</h2></div>
  <div className='user-feedback'><h2 style={{color:"rgb(200, 200, 200)",marginLeft:20}}>User's Feedback</h2></div>
   </div>
   <div  className='view-f'>



   
  </div>

          
             </div></AdminSidebar>
    </>
)

}
export default ViewFeedbacks; */


import AdminSidebar from './AdminSidebar';
import { useState , useEffect } from "react";
//import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from '../firebase-config';
import { collection, doc, getDocs } from 'firebase/firestore';
import { authentication } from '../firebase-config';
import {useNavigate} from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
//const auth = getAuth();
function ViewFeedbacks () {

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

  var Feedbacks=[];
    const [data, setData] = useState([]);
    //const [email, setEmail]=useState([]);
    const [query, setQuery] = useState('');
    useEffect(() => {
      const querySnapshot = getDocs(collection(db, "Rating")).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log("Usersss",doc.id, " => ", doc.data());
          const response = doc.data();
          //const email=doc.data().email;
          Feedbacks.push(response);
         // setEmail(prev=>[...prev,email])
          setData(prev=>[...prev,response])
          // setPatient(Users);
          // Alert.alert("LoggedIn as Doctor");
          // setDoc("False");
          //console.log("SEARCH RESULTS==="+Doctors)
      });console.log("Feedback's Array :",Feedbacks)   
      }); 
  }, []);
  //console.log("Search results",data.filter(user=>user.email.includes("sadia")))
    return (<>
    <AdminSidebar>
    <div className="search-main">
      <div className="search-heading">View Feedbacks</div> 
            <ul className="view-f">
         {data.map((user) => (
           <li className="fetch-feedbacks" key={user.email}>
        <div>  <AiTwotoneMail style={{marginLeft:10}}/>  : {user.email}</div> <div style={{ marginLeft:590,marginTop:-55}}> <FaStar/>  : {user.Rating}</div> <AiOutlineComment style={{marginLeft:820 ,marginTop:-110}}/> <div  style={{ marginLeft:870,marginTop:-110,width:500,maxWidth:"fit-content"}}> : {user.Message}</div>  
          </li>
       ))}
       </ul>

   
               </div></AdminSidebar>
            </>
    )
    }
export default ViewFeedbacks;