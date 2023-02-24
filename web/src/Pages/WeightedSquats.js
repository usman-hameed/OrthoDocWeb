import React from 'react';
import Sidebar from './Sidebar';

function WeightedSquats(){
   
return( <>
 <Sidebar>
    <div className="main-main">
      <div className="search-heading">Weighted Squats</div> 
      <div className='attention'> *Starting with a version of the movement that you can carry out safely and easily is important.</div>
      <div >
      <iframe 
        src="https://www.youtube.com/embed/n0zx9Ns0wbQ"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
        style={{width: 1200 , height: 700, marginLeft:400, marginTop:50,borderRadius:15}}
      />{" "}
      </div>
      <div className='weightsquat-description'>Weightlifting is actually healthy for those diagnosed with osteoarthritis, because strong muscles support the joints. Weightlifting can also ease joint pain and stiffness, boost bone strength, and maintain a healthy weight</div>
    
          
             </div></Sidebar>
    </>
)

}
export default WeightedSquats;