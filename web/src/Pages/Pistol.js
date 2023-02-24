import React from 'react';
import Sidebar from './Sidebar';

function Pistol(){
   
return( <>
 <Sidebar>
    <div className="main-main">
      <div className="search-heading">Pistol Squats</div> 
      <div className='attention'> *Starting with a version of the movement that you can carry out safely and easily is important.</div>
      <div >
      <iframe 
        src="https://www.youtube.com/embed/5eEnwtGS060"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
        style={{width: 1200 , height: 700, marginLeft:400, marginTop:50, borderRadius:15}}
      />{" "}
      </div>
      <div className='pistol-description'>This exercise is called the pistol squat. It works out on several muscles in each leg separately. They strengthen the knee more than a regular squat and increase flexibility and balance while working each leg separately.</div>
             </div>
          
             </Sidebar>
    </>
)

}
export default Pistol;