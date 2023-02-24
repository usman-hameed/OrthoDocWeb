import React from 'react';
import Sidebar from './Sidebar';
import image1 from "../images/squat.png";
import image2 from "../images/wsquat.png";
import image3 from "../images/pushup.png";
import image4 from "../images/pistol.png";
import image5 from "../images/pikewalk.png";
import image6 from "../images/jumpingjacks.png";
import image7 from "../images/crossjumpR.png";
import image8 from "../images/crossjumps.png";
import image9 from "../images/burpee.png";
import image10 from "../images/boxjump.png";
import image11 from "../images/bicyclecrunch.png";
import image12 from "../images/sitstand.jpeg";
import {Link} from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";
function Videos () {
    return (<>
    <Sidebar>
    <div className="main-main">
      <div className="search-heading">Videos</div> 
<div className='squats'><h4 style={{fontfamily:"Arial, Helvetica, sans-serif" , marginLeft:106 ,color:'#35414F'}}>Squats</h4> <img src={image1} alt="loading..."  style={{width:150 ,height:150, marginLeft:70, marginTop:10, borderRadius:180}} />
<Link to='/videos/squats'>
              <button type="submit" className="squat-button">
                Exercise Tutorial  <FaAngleRight/>
              </button></Link></div>

           
             <div className='sit-stand'><h4 style={{fontfamily:"Arial, Helvetica, sans-serif" , marginLeft:106 ,color:'#35414F'}}>Sit-stand</h4> <img src={image12} alt="loading..."  style={{width:150 ,height:150, marginLeft:70, marginTop:10, borderRadius:180}} />
<Link to='/videos/sitStand'>
              <button type="submit" className="sitStand-button">
                Exercise Tutorial  <FaAngleRight/>
              </button></Link></div>

              <div className='legstretch'><h4 style={{fontfamily:"Arial, Helvetica, sans-serif" , marginLeft:72 ,color:'#35414F'}}>Weighted Squats</h4> <img src={image2} alt="loading..."  style={{width:150 ,height:150, marginLeft:70, marginTop:10, borderRadius:180}} />
<Link to='/videos/weightedSquats'>
              <button type="submit" className="legstretch-button">
                Exercise Tutorial  <FaAngleRight/>
              </button></Link></div>

              <div className='pushups'><h4 style={{fontfamily:"Arial, Helvetica, sans-serif" , marginLeft:99 ,color:'#35414F'}}>Pushups</h4> <img src={image3} alt="loading..."  style={{width:150 ,height:150, marginLeft:70, marginTop:10, borderRadius:180}} />
<Link to='/videos/pushups'>
              <button type="submit" className="pushups-button">
                Exercise Tutorial  <FaAngleRight/>
              </button></Link></div>

              <div className='pistol'><h4 style={{fontfamily:"Arial, Helvetica, sans-serif" , marginLeft:90 ,color:'#35414F'}}>Pistol Squats</h4> <img src={image4} alt="loading..."  style={{width:150 ,height:150, marginLeft:70, marginTop:10, borderRadius:180}} />
<Link to='/videos/pistol'>
              <button type="submit" className="pistol-button">
                Exercise Tutorial  <FaAngleRight/>
              </button></Link></div>

              <div className='pike-walk'><h4 style={{fontfamily:"Arial, Helvetica, sans-serif" , marginLeft:90 ,color:'#35414F'}}>Pike Walk</h4> <img src={image5} alt="loading..."  style={{width:150 ,height:150, marginLeft:70, marginTop:10, borderRadius:180}} />
<Link to='/videos/pikeWalk'>
              <button type="submit" className="pikewalk-button">
                Exercise Tutorial  <FaAngleRight/>
              </button></Link></div>
              
              <div className='jumping-jacks'><h4 style={{fontfamily:"Arial, Helvetica, sans-serif" , marginLeft:90 ,color:'#35414F'}}>Jumping Jacks</h4> <img src={image6} alt="loading..."  style={{width:150 ,height:150, marginLeft:70, marginTop:10, borderRadius:180}} />
<Link to='/videos/jumpingJacks'>
              <button type="submit" className="jumpingjack-button">
                Exercise Tutorial  <FaAngleRight/>
              </button></Link></div>

              <div className='cross-jumps'><h4 style={{fontfamily:"Arial, Helvetica, sans-serif" , marginLeft:45 ,color:'#35414F'}}>Cross Jumps Rotation</h4> <img src={image7} alt="loading..."  style={{width:150 ,height:150, marginLeft:70, marginTop:10, borderRadius:180}} />
<Link to='/videos/crossJumpsRotation'>
              <button type="submit" className="crossjumps-button">
                Exercise Tutorial  <FaAngleRight/>
              </button></Link></div>
              
              <div className='cross-jumpss'><h4 style={{fontfamily:"Arial, Helvetica, sans-serif" , marginLeft:75 ,color:'#35414F'}}>Cross Jumps</h4> <img src={image8} alt="loading..."  style={{width:150 ,height:150, marginLeft:70, marginTop:10, borderRadius:180}} />
<Link to='/videos/crossJumps'>
              <button type="submit" className="crossjumpss-button">
                Exercise Tutorial  <FaAngleRight/>
              </button></Link></div>

              <div className='burpee'><h4 style={{fontfamily:"Arial, Helvetica, sans-serif" , marginLeft:110 ,color:'#35414F'}}>Burpee</h4> <img src={image9} alt="loading..."  style={{width:150 ,height:150, marginLeft:70, marginTop:10, borderRadius:180}} />
<Link to='/videos/burpee'>
              <button type="submit" className="burpee-button">
                Exercise Tutorial  <FaAngleRight/>
              </button></Link></div>

              <div className='box-jump'><h4 style={{fontfamily:"Arial, Helvetica, sans-serif" , marginLeft:95 ,color:'#35414F'}}>Box Jump</h4> <img src={image10} alt="loading..."  style={{width:150 ,height:150, marginLeft:70, marginTop:10, borderRadius:180}} />
<Link to='/videos/boxJump'>
              <button type="submit" className="boxjump-button">
                Exercise Tutorial  <FaAngleRight/>
              </button></Link></div>

              <div className='bicycle-crunch'><h4 style={{fontfamily:"Arial, Helvetica, sans-serif" , marginLeft:75 ,color:'#35414F'}}>Bicycle Crunch</h4> <img src={image11} alt="loading..."  style={{width:150 ,height:150, marginLeft:70, marginTop:10, borderRadius:180}} />
<Link to='/videos/bicycleCrunch'>
              <button type="submit" className="bicyclecrunch-button">
                Exercise Tutorial  <FaAngleRight/>
              </button></Link></div>

            </div></Sidebar>
            </>
    )
    }
export default Videos