import React from 'react';
import { authentication } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { db } from '../firebase-config';
import { collection, getDocs } from "firebase/firestore";
import { query, where } from "firebase/firestore";
import { getAuth} from "firebase/auth";
function Conversation(){
  const navigate = useNavigate();
 // useEffect(()=>{
  //    if(!authentication.currentUser){
   //       navigate('/login');
     //     return <div className='splash'>
      //        Loading
        //  </div>
  //    }
 // },[])
 const [users, setusers] = useState([]);
 console.log("AUTH"+ authentication.currentUser.email);
 if(!authentication.currentUser){
   
   alert("Please Login First");
   //navigation.navigate("login");
}
const mail = authentication.currentUser.email;
 const auth = getAuth();

 const querySnapshot = async () => {

   const col = collection(db, "chatroom");
   const q = query(
     col,
     where("sentBy", "==", authentication.currentUser?.email)
   );
   const q2 = query(
     col,
     where("sentTo", "==", authentication.currentUser?.email)
   );

   const snap = await getDocs(q);
   const snap3 = await getDocs(q2);

   let usersEmail = [];
   console.log("b4 snap 1");
   snap.forEach((doc) => {

     if (!usersEmail.find((email) => email == doc.data().sentTo)) {
       usersEmail.push(doc.data().sentTo);
     }
   });
   console.log("b4 snap 3");
   snap3.forEach((doc) => {

     if (!usersEmail.find((email) => email == doc.data().sentBy)) {
       // if (doc.data().sentTo != props.route.params.params.param1)
       usersEmail.push(doc.data().sentBy);
     }

   });    console.log(users);

   usersEmail.map(async (email) => {
     const col2 = collection(db, "doctors");
     const q2 = query(col2, where("email", "==", email));
     const snap2 = await getDocs(q2);
     snap2.forEach((doc) => {
       setusers((user) => [...user, doc.data()]);
     });
     
   });
 };


 useEffect(() => {
   querySnapshot();
 }, []);



return (
    <div className="">
      {users.map((user)=>{
 <a> <p style={{color:'white'}}>{user.displayName?? user.name} </p></a> 
 } ) }
    </div>
  )}
export default Conversation;