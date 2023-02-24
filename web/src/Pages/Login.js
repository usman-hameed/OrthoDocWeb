import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
//import Registeration from './Registeration';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import image from '../images/logo.jpeg';
import { collection, getDocs } from 'firebase/firestore';
import { db, authentication } from '../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
const Users=[];
function Login() {
  const navigate = useNavigate();

    const [emaillog, setEmaillog] = useState('');
    const [passwordlog, setPasswordlog] = useState('');
    const [flag, setFlag] = useState(false);
    const [home, setHome] = useState(true);
    useEffect(() => {
        const querySnapshot = getDocs(collection(db, "users")).then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log("Usersss",doc.id, " => ", doc.data());
            Users.push(doc.id);
            // setPatient(Users);
            // Alert.alert("LoggedIn as Doctor");
            // setDoc("False");
            console.log("Usersss are"+Users)
        });
      
        });
    
        
    }, []);
    

    async function handleSignin(e) {
      e.preventDefault();
      console.log(authentication);
      if(Users.includes(emaillog)){
        try {
            await signInWithEmailAndPassword(
                authentication,
                emaillog,
                passwordlog
            );
            console.log(authentication);
            navigate('/home');
        } catch(error) {
          alert(error.message);
          console.log(error.message);
        }
      }
        else{
            alert("No Such email "+emaillog+" exisis in patient's Database");
        }

    }
    return (
        <>
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
                        <h3 className="heading">Patient's Login</h3>
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
                        <div>
                            <Link className="login-link" to="/registration">
                                Register Now
                            </Link>
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
    );
}
export default Login;