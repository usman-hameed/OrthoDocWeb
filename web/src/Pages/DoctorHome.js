import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import DoctorSidebar from './DoctorSidebar';
import { useState , useEffect } from "react";
//import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
//const auth = getAuth();
function DoctorHome () {
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
      });console.log("Doctor's Array :",Users)   
      }); 
  }, []);
  //console.log("Search results",data.filter(user=>user.email.includes("sadia")))
    return (<>
    <DoctorSidebar>
    <div className="search-main">
      <div className="search-heading">Search for Patient</div> 
        <div className="search">
            <input
                    className="search__input"
                    type="text"
                    id="search"
                    placeholder="Search for patient here..."
                    //onKeyUp={handleSubmit} 
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="search__button">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>  
       <ul className="search-results">
          {data.filter((user) =>
            user.displayName.toLowerCase().includes(query)
          ).map((user) => (
            <a onClick={() => navigate('/viewDoctorProfile', { state: { id: user.email } })}> <li className="fetch-doctor" key={user.displayName}>
            <FaUserCircle style={{marginLeft:40,height:50, width:50,marginTop:30}}/>  <div style={{marginLeft:170,position:"absolute",marginTop:-60}}> {user.email}</div> <br /><div style={{marginLeft:170, marginTop:-10}}>{user.displayName} </div><div><FaAngleRight style={{marginLeft:790,height:40, position:"absolute", marginTop:-70}}/></div>
            </li></a>

          ))}

        </ul>
               </div></DoctorSidebar>
            </>
    )
    }
export default DoctorHome