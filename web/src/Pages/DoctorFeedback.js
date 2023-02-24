import { useState } from "react";
import { FaStar } from "react-icons/fa";
import DoctorSidebar from "./DoctorSidebar";
import { authentication } from '../firebase-config';
import { db } from '../firebase-config';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};


function Feedback() {
  const navigate = useNavigate();

  const [currentValue, setCurrentValue] = useState(1);
  
  const [message, setMessage] = useState("");
  const [hoverValue, setHoverValue] = useState();
  const stars = Array(5).fill(0)
  console.log("Value is"+currentValue);
  const handleClick = value => {
    setCurrentValue(value)

  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }
  const addData = () => {


    const email = authentication.currentUser.email;
    if(!authentication.currentUser){
      navigate('/login');
    }
    const myDoc= doc(db, 'Rating',email);
    console.log(email);
    console.log(currentValue);
    console.log(message);
    
    
    const docData = {
      "email": email,
      "Rating": currentValue,
      "Message": message,
    };
    
    setDoc(myDoc, docData).then(() => {
      alert("Your Opinion Matters, Thank You for Rating Us :)")
      console.log('Document written with ID: ', myDoc.id);
    }).catch((error) => {
      console.error('Error adding document: ', error.message);
    })
  
  
    };
  return (
    <> <DoctorSidebar>
   <div className="feedback-main">
       <div className="feedback-heading"> Share your feedback </div>
    <div className="feedback-container">
      <div className="stars">
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={50}
              onClick={() => handleClick(index+1)}
              onMouseOver={() => handleMouseOver(index+1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 40, marginTop:80,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
      <textarea value={message} className="text-area"
        placeholder="Say what you think about this app?"
        onChange={(event) => setMessage(event.target.value)}
        
      />

      <button onClick={addData} className="feedback-button"
      >
       <div className="submit">Submit</div>
      </button>
      
    </div></div></DoctorSidebar></>
  );
};


export default Feedback
 