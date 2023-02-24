
import AdminSidebar from './AdminSidebar';
import { useState , useEffect } from "react";
//import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from '../firebase-config';
import { collection, doc, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
function AdminViewPatient () {
  const navigate = useNavigate();
    var Users=[];
    const [data, setData] = useState([]);
    //const [email, setEmail]=useState([]);
    const [query, setQuery] = useState('');
    useEffect(() => {
      const querySnapshot = getDocs(collection(db, "users")).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log("Usersss",doc.id, " => ", doc.data());
          const response = doc.data();
          //const email=doc.data().email;
          Users.push(response);
         // setEmail(prev=>[...prev,email])
          setData(prev=>[...prev,response])
          // setPatient(Users);
          // Alert.alert("LoggedIn as Doctor");
          // setDoc("False");
          //console.log("SEARCH RESULTS==="+Doctors)
      });console.log("Users's Array :",Users)   
      }); 
  }, []);


    return (<>
    <AdminSidebar>
    <div className="search-main">
      <div className="search-heading">View patients</div> 
          
            <ul className="view-results">
          {data.map((user) => (
            <a onClick={() => navigate('/admin/viewPatientProfile', { state: { id: user.email } })}> <li className="fetchh-doctor" key={user.displayName}>
              <FaUserCircle style={{marginLeft:40,height:50, width:50,marginTop:30}}/>  <div style={{marginLeft:170,position:"absolute",marginTop:-60}}> {user.email}</div> <br /><div style={{marginLeft:170, marginTop:-10}}>{user.displayName} </div><div><FaAngleRight style={{marginLeft:790,height:40, position:"absolute", marginTop:-70}}/></div>
            </li></a>

          ))}

        </ul>
        </div></AdminSidebar>
            </>
    )
    }
export default AdminViewPatient   