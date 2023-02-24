import React from 'react';
import Sidebar from './Sidebar';

function BoxJump(){
   
return( <>
 <Sidebar>
    <div className="main-main">
      <div className="search-heading">Box Jump</div> 
      <div className='attention'> *Starting with a version of the movement that you can carry out safely and easily is important.</div>
      <div >
      <iframe 
        src="https://www.youtube.com/embed/hSPhiBlwc3U"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
        style={{width: 1200 , height: 700, marginLeft:400, marginTop:50,borderRadius:15}}
      />{" "}
      </div>
      <div className='boxjump-description'> Box jumps will help you become quicker, stronger, and softer than before. If you perform them for longer than a few seconds, they'll increase your heart rate and help you burn calories like there's no alternative.</div>
          
          
             </div></Sidebar>
    </>
)

}
export default BoxJump;