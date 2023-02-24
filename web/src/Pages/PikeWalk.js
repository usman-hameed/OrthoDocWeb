import React from 'react';
import Sidebar from './Sidebar';

function PikeWalk(){
   
return( <>
 <Sidebar>
    <div className="main-main">
      <div className="search-heading">Pike Walk</div> 
      <div className='attention'> *Starting with a version of the movement that you can carry out safely and easily is important.</div>
      <div >
      <iframe 
        src="https://www.youtube.com/embed/L6uvtQQtH0c"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
        style={{width: 1200 , height: 700, marginLeft:400, marginTop:50,borderRadius:15}}
      />{" "}
      </div>
      <div className='pikewalk-description'>This exercise decreases knee osteoarthritis pain and dysfunction.</div>
            
          
             </div></Sidebar>
    </>
)

}
export default PikeWalk;