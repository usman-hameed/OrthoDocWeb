
import AdminSidebar from './AdminSidebar';
import { useState , useEffect } from "react";
//import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { FaUserMd } from "react-icons/fa";
function AdminHome () {
  const navigate = useNavigate();
    var Doctors=[];
    const [data, setData] = useState([]);
    //const [email, setEmail]=useState([]);
    // const [query, setQuery] = useState('');
    useEffect(() => {
      const querySnapshot = getDocs(collection(db, "doctors")).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log("Usersss",doc.id, " => ", doc.data());
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


    return (<>
    <AdminSidebar>
    <div className="search-main">
      <div className="search-heading">View doctors</div> 
           
            <ul className="view-results">
          {data.map((user) => (
            <a onClick={() => navigate('/admin/viewProfile', { state: { id: user.email } })}> <li className="fetchh-doctor" key={user.displayName}>
             <FaUserMd style={{marginLeft:40,height:50, width:50,marginTop:30}}/> <div style={{marginLeft:170,position:"absolute",marginTop:-60}}> {user.email}</div><br /> <div style={{marginLeft:170, marginTop:-10}}>{user.displayName} </div> <div><button className='adminhome-button'type='submit'><h5 className='Upload'>View</h5></button></div>
            </li></a>

          ))}

        </ul>

       
       
        </div></AdminSidebar>
            </>
    )
    }
export default AdminHome