import React, {useState, useEffect} from 'react';
import Footer from '../Components/Footer';
import image from "../images/logo.jpeg";
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db, authentication } from '../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
const admin=[];
function AdminLogin() {
  const navigate = useNavigate();
  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    const querySnapshot = getDocs(collection(db, "admin")).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log("Admin ",doc.id, " => ", doc.data());
        admin.push(doc.id);
        // setPatient(Users);
        // Alert.alert("LoggedIn as Doctor");
        // setDoc("False");
    });
  
    });
    
}, []);

async function handleSignin(e) {
  e.preventDefault();
  console.log(authentication);
  if(admin.includes(emaillog)){
    try {
        await signInWithEmailAndPassword(
            authentication,
            emaillog,
            passwordlog
        );
        console.log(authentication);
        navigate('/adminHome');
    } catch(error) {
      alert(error.message);
      console.log(error.message);
    }
  }
    else{
        alert("No Such email "+emaillog+" exisis in admin Database");
    }}

  return (<>
     <div className="login-main">
                <Footer />
                <div className="logo-image">
                    {' '}
                    <img
                        src={image}
                        alt="loading..."
                        style={{
                            width: 1100,
                            height: 300,
                            marginLeft: 20,
                            marginTop: 100,
                        }}
                    />{' '}
                </div>
                <div className="log-inner">
                    <form onSubmit={handleSignin}>
                        <h3 className="heading">Admin's Login</h3>
                        <div className="log-group">
                            <label className="log-label">Email</label>
                            <input
                                type="email"
                                className="log-control"
                                value={emaillog}
                                placeholder="Enter email"
                                onChange={(e) => setEmaillog(e.target.value)}
                                required
                            />
                        </div>
                        <div className="log-group">
                            <label className="log-label">Password</label>
                            <input
                                type="password"
                                value={passwordlog}
                                className="log-control"
                                placeholder="Enter password"
                                onChange={(event) =>
                                    setPasswordlog(event.target.value)
                                }
                                required
                            />
                        </div>
                        <div>
                            <button type="submit" className="log-button">
                                Login
                            </button>
                        </div>
                     

                        {flag && (
                            <Alert color="primary" variant="warning">
                                Invalid email or password!
                            </Alert>
                        )}
                    </form>
                    <h1>
                        {/* {emaillog}+{passwordlog} */}
                    </h1>
                </div>
            </div>
   </>
  )
}
export default AdminLogin