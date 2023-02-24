import React from 'react';
import Sidebar from './Sidebar';

function Pushups(){
   
return( <>
 <Sidebar>
    <div className="main-main">
      <div className="search-heading">Pushups</div> 
      <div className='attention'> *Starting with a version of the movement that you can carry out safely and easily is important.</div>
      <div >
      <iframe 
        src="https://www.youtube.com/embed/UeP6ZwBwKP8"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
        style={{width: 1200 , height: 700, marginLeft:400, marginTop:50,borderRadius:15}}
      />{" "}
      </div>
      <div className='pushups-description'>Push-ups can help reduce pain, stiffness, and swelling associated with osteoarthritis.</div>
             </div>
          
             </Sidebar>
    </>
)

}
export default Pushups;