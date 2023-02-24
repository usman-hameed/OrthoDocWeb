import React from 'react';
import { MdFileDownload } from "react-icons/md";
function Prescription(){
return( <>
<div className='prescription-main'>
  <div className='prescription-id'> <p className='pres'>12345-6789098</p></div>
  <div className='doc-name'><p className='name-p'>Dr. Riaz Ahmed</p></div>
  <div className='prescription-download'><button className='download-p-button'type='download'><h5 className='download-p'>Download <MdFileDownload/></h5></button></div>
</div>
    </>
)

}
export default Prescription;