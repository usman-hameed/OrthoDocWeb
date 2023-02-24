import React from 'react';
import Sidebar from './Sidebar';

function CrossJumps(){
   
return( <>
 <Sidebar>
    <div className="main-main">
      <div className="search-heading">Cross Jumps</div> 
      <div className='attention'> *Starting with a version of the movement that you can carry out safely and easily is important.</div>
      <div >
      <iframe 
        src="https://www.youtube.com/embed/nHJpMhTSy54"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
        style={{width: 1200 , height: 700, marginLeft:400, marginTop:50,borderRadius:15}}
      />{" "}
      </div>
      <div className='crossjump-description'> If you do cross jumps often enough, your body will adapt by increasing both bone and muscle mass to make your knees stronger.</div>
          
          
          
          
             </div></Sidebar>
    </>
)

}
export default CrossJumps;