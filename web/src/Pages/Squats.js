import React from 'react';
import Sidebar from './Sidebar';

function Squats(){
   
return( <>
 <Sidebar>
    <div className="main-main">
      <div className="search-heading">Squats</div> 
      <div className='attention'> *Starting with a version of the movement that you can carry out safely and easily is important.</div>
      <div >
      <iframe 
        src="https://www.youtube.com/embed/dxmN_lQFZ5c"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
        style={{width: 1200 , height: 700, marginLeft:400, marginTop:50,borderRadius:15}}
      />{" "}
      </div>
      <div className='squat-description'>Squatting can help build leg and hip strength, leading to more stable joints. Over time, your range of motion will increase. As long as you're able to practice with minimal knee joint discomfort, it's safe to include squats in your exercise routine.</div>
          
             </div></Sidebar>
    </>
)

}
export default Squats;