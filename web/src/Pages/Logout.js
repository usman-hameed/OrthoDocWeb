import React from 'react';
import { authentication } from '../firebase-config';
import { signOut } from '../firebase-config';
function Logout(){ 
  return(
  <div>
    <button onClick={()=>signOut(authentication)}></button>
   </div>)
}
export default Logout