import React from 'react';
import Sidebar from './Sidebar';

function BicycleCrunch(){
   
return( <>
 <Sidebar>
    <div className="main-main">
      <div className="search-heading">Bicycle Crunch</div> 
      <div className='attention'> *Starting with a version of the movement that you can carry out safely and easily is important.</div>
      <div >
      <iframe 
        src="https://www.youtube.com/embed/kSj2mWNnLoI"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
        style={{width: 1200 , height: 700, marginLeft:400, marginTop:50, borderRadius:15}}
      />{" "}
      </div>
      <div className='bicyclecrunch-description'>Because bicycle crunches require more leg movement than standard crunches, they're great for improving stability, flexibility, and coordination between muscles.</div>
             </div>
          
             </Sidebar>
    </>
)

}
export default BicycleCrunch;