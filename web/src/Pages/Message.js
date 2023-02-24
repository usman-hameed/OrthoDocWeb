import { collection, getDocs, orderBy } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { query, where, Timestamp } from "firebase/firestore";
import { useLocation } from 'react-router-dom';
import { authentication, db, storage } from '../firebase-config';
import { useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import { MdSend } from "react-icons/md";
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
function Message() {
  const location = useLocation();
  const [messages, setMessages] = useState([]);
  const [temp, setTemp] = useState("");
  const imageRef = useRef(null);
  const dummyRef = useRef(null);
  const textRef = useRef(null);

  useEffect(()=>{
    dummyRef.current.scrollIntoView({behaviour: 'smooth'});
  },[messages])

  
  let messageArraay = [];
  const querySnapshot = async () => {
    console.log("State", location.state.docid);
    const col = collection(db, "chatroom");
    const q = query(
      col,
      where(
        "chatId",
        "==",
        location.state.userid + location.state.docid
      ), orderBy("createdAt", "asc")
    );
    const snap = await getDocs(q);
   
    snap.forEach((doc) => {
      const new_obj = {
        ...doc.data(),
      };

      messageArraay.push(new_obj);
    });
    console.log("message array", messageArraay);
    setMessages(messageArraay);
    // console.log("REVERSE",messageArraay.reverse())
  };
  useEffect(() => {
    querySnapshot();
  }, []);

    





  const sendImageMessage = (e) => {
    const image = e.target.files[0];
    const fileType = image.type.split('/')[1];
    const storageRef = ref(storage, `image-${Date.now()}.${fileType}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
        'state_changed',
        (snapshot) => {
            const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
        },
        (error) => {
            console.log(error);
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                addMessage(downloadURL, 'image');
            });
        }
    );
};

const addMessage = async (temp, type) => {
  try {
    
    const mymsg = {
      sentBy:
        location.state.current == "doctor"
          ? location.state.docid
          : location.state.userid,
      sentTo:
        location.state.current == "doctor"
          ? location.state.userid
          : location.state.docid,

      createdAt: Timestamp.fromDate(new Date()),
      chatId:
        location.state.userid + location.state.docid,
      text:temp,
      type:type,
    
    }
    const myDoc = doc(db, "chatroom", new Date().toString());
    setDoc(myDoc, mymsg);
    setTemp("");
    setMessages((prev)=>[...prev, mymsg])

  
  }
    catch (error) {
      console.log(error);
  }
};
const sendTextMessage = () => {
  addMessage(temp,'text');

};



  console.log("Doc id :", location.state.docid)
  console.log("User id", location.state.userid)
  console.log("temppp", messages);
  return (
    <>

      <div className="messenger">
    
        <div className="chatBox">
          <div className="chatBoxWrapper">

              <div className='chatBoxTop'>
              {messages.map((item, uid) => (
                 <div className="messages">
                  
                <div className={`msg ${item.sentBy== authentication.currentUser.email? 'sent' : 'received'}`}>
                  {
                    item.type==='text'?
                    <p className="P">{item.text} </p>:
                    <img src={item.text} style={{width:'750px', height:'750px', objectPosition:'cover'}} />
                    
                  }

                </div></div>
              ))}
              <span ref={dummyRef} />
              </div>
              <div className="chatBoxBottom">
                
             <input id="file-input"
                        ref={imageRef}
                        accept="image/*"
                        className="hidden"
                        type="file"
                        onChange={sendImageMessage}/>
                <input className="chatMessageInput" onChange={(e) => setTemp(e.target.value)} value={temp}  placeholder="Write something.."></input>
                <button disabled={temp.length===0?true:false} className="chatSubmitButton" onClick={sendTextMessage}>
                  
                  <div className='sendicon'>  <MdSend /></div>
                </button>
              </div>
          </div>
        </div>

      </div>
      <Link to='/home'>
        <div className='backtohome'><FaArrowCircleLeft /></div></Link>
    </>

  );
}
export default Message;