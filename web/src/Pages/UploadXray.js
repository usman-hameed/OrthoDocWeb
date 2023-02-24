
import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { authentication } from '../firebase-config';
import Sidebar from "./Sidebar";
import { FaFileMedical } from "react-icons/fa";
function Uploadxray(){
   const navigate = useNavigate();
   useEffect(()=>{
       if(!authentication.currentUser){
           navigate('/login');
           alert("Please Login first")
           return <div className='splash'>
               Loading
           </div>
       }
   },[])
   const [data,setData]=useState();
   console.log(data);
   var [uploadInput, setUploadInput] = useState("");
   const [result,setresult]=useState("");
   const[results,setResults]=useState("");
   const check = () => {
      const dataa = new FormData();

      console.log("data.file", uploadInput.files[0])
      
      dataa.append('files', uploadInput.files[0]);
      
      console.log("data",dataa)

      uploadd(dataa)
          
      

  }
   const uploadd=(dataa)=>{
     
      console.log("data inside upload",dataa)
      fetch(`http://127.0.0.1:5002/uploadXray`, {

          method: 'POST',
          body:dataa
          
      })
          .then((res)=> {
              if (res.ok) {
                  console.log("response.data",res.json)
                  return res.json()

              }    
          }).then(data =>
               {
                 // adddata(data)
                 console.log("Result: ",data)
                  setresult(data)
                  setResults(data.headers)
                   alert("Results generated successfully")

      })
      .catch((err)=>{  
         console.log("error",err)
      }
      )
  }
   function handleclick(e) {
      e.preventDefault();}
   return(<>
   <Sidebar>
   <div className='uploadxray-main'>
   <h2 className="uploadxray-heading"> Upload X-Rays </h2>
   <div className="uploadxray-container">
      <ol className='instructions'>
         <h1 style={{marginLeft:-10}}>Instructions for uplaoding:</h1>
         {/* <li style={{marginLeft:40}}>The file format must be in PNG.</li> */}
         <li style={{marginLeft:40}}>For best results, the photo must be of high quality.</li>
         <li style={{marginLeft:40}}>Please be patient after uploading the photo; processing the photo may take <br/> some time.</li>
      </ol>
      <div className="upload-button" >
   <input id='imgs' type="file" className='input' accept="image/png, image/jpeg" style={{fontSize:25}} ref={(ref) => {uploadInput = ref;
                    console.log(uploadInput)}}  onChange={(e)=>setData(e.target.files)} /></div>
   </div>
   <h2 className="download-heading"> View Diagnosis Results </h2>
   <div className="uploadxray-container">
      <ol className='instructions'>
      <h1 style={{marginLeft:-10}}>Instructions for downloading:</h1>
         <li style={{marginLeft:40}}>Click on the submit button to generate the results </li>
         <li style={{marginLeft:40}}>Click on the report icon to generate the report </li>
      

      </ol>
      <div>
      {/* <div className='show-results'>Results are {results} </div> */}

      <button onClick={check} className='download-button' type='download' ><h5 className='download'>Submit</h5></button> 
      <a onClick={() => navigate('/generateReport', { state: { id: results } })}>  <FaFileMedical style={{color: '#3f5063',fontSize:60, marginLeft:580, marginTop:-150}}/> </a>
   </div>
   </div> </div> 
   </Sidebar>
    
    </>
)}
 
export default Uploadxray

