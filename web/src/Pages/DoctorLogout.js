import React from 'react';
import { authentication } from '../firebase-config';
import { signOut } from '../firebase-config';
function DoctorLogout(){ 
  <div>
     <button onClick={()=>signOut(authentication)}></button>
  </div>
}
export default DoctorLogout