import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Sidebar from './Sidebar';
import { useState, useEffect } from "react";

import { FaAngleRight } from "react-icons/fa";
//import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { FaUserMd } from "react-icons/fa";

//const auth = getAuth();
function Home() {
  const navigate = useNavigate();
  var Doctors = [];
  const [data, setData] = useState([]);
  const [queryy, setQueryy] = useState('');
  // const [list, setList] = useState(null);

  useEffect(() => {
    const querySnapshot = getDocs(collection(db, "doctors")).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log("Usersss", doc.id, " => ", doc.data());
        const response = doc.data();
        Doctors.push(response);
        setData(prev => [...prev, response])
      }); console.log("Doctor's Array :", Doctors)
    });
  }, []);

  //console.log("Search results",data.filter(user=>user.email.includes("sadia")))
  return (<>
    <Sidebar>
      <div className="search-main">
        <div className="search-heading">Search for doctor</div>
        <div className="search">
          <input
            className="search__input"
            type="text"
            id="search"
            placeholder="Search for doctor here..."
            //onKeyUp={handleSubmit}   
            onChange={(e) => setQueryy(e.target.value)}
          />
          <button className="search__button">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        <ul className="search-results">
          {console.log(data)}
          {data.filter((user) =>
            user.displayName.toLowerCase().includes(queryy) || user.email.toLowerCase().includes(queryy) || user.address[0][0].city.toLowerCase().includes(queryy)
          ).map((user) => (
              <a onClick={() => navigate('/viewProfile', { state: { id: user.email } })}> 
              <li className="fetch-doctor" key={user.displayName}>
                <FaUserMd style={{ height: 70, width: 70 }} /> 
                <div style={{display:'flex',marginLeft:'-100px', flexDirection:'column', alignItems:'start', justifyContent:'center', paddingTop:'5px', marginRight:'10px'}}>
                  <h2> 
                    {user.email}
                  </h2>
                  <h2> 
                    Dr.{user.displayName} 
                  </h2>
                  <p style={{fontSize:'28px'}}>
                    {`${user.address[0][0].city}, ${user.address[0][0].district}`}
                  </p>
                </div>
                  <FaAngleRight style={{ height: 50, marginLeft:'50px' }} />
              </li></a>

            ))}

        </ul>
      </div></Sidebar>
  </>
  )
}
export default Home