import React from "react";
import Sidebar from './Sidebar';

function Burpee(){
   
return( <>
 <Sidebar>
    <div className="main-main">
      <div className="search-heading">Burpee</div> 
      <div className='attention'> *Starting with a version of the movement that you can carry out safely and easily is important.</div>
      <div >
      <iframe 
        src="https://www.youtube.com/embed/41fKJyJLy58"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
        style={{width: 1200 , height: 700, marginLeft:400, marginTop:50 ,borderRadius:15}}
      />{" "}
      </div>
      <div className='burpee-description'>With burpees, the focus is on building muscle strength and endurance in your lower body. A standard burpee exercise works to strengthen the muscles in your knees.</div>
             </div>
             </Sidebar>
    </>
)

}
export default Burpee;