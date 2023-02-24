import React from 'react';
import Sidebar from './Sidebar';

function Sitstands(){
   
return( <>
 <Sidebar>
    <div className="main-main">
      <div className="search-heading">Sit-stands</div> 
      <div className='attention'> *Starting with a version of the movement that you can carry out safely and easily is important.</div>
      <div >
      <iframe 
        src="https://www.youtube.com/embed/aGA_3k35ZCg"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
        style={{width: 1200 , height: 700, marginLeft:400, marginTop:50,borderRadius:15}}
      />{" "}
      </div>
      <div className='sitstand-description'>Sit stands improve the range of knee movement and the  overall leg strength. Over time, it will become easier to stand up without pain.</div>
             </div></Sidebar>
    </>
)

}
export default Sitstands;