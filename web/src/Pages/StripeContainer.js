import React from 'react'   
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'
import { useLocation } from 'react-router-dom';

import Sidebar from './Sidebar'
const PUBLIC_KEY="pk_test_51M0lQaKzco1s0qVzsrIv96isxw4acwLmoD6Zbp1o43Us1lPLhoDt497SQTKhAe840FgBWIZ2Ri6vaXxZt9bKm2pJ00UxKIXhvY"
const stripeTestPromise=loadStripe(PUBLIC_KEY)

function StripeContainer(){
      const location = useLocation();
      const appointment = {
            doctorId: location.state.id,
            patientId: location.state.patientId,
            date: location.state.date,
            timeSlot: location.state.timeSlot,
            name: location.state.name,
      }
return(
<>
<Sidebar>
<div className='main-main'>
      <div className='search-heading'>Payment Information</div>
<Elements stripe={stripeTestPromise}>
<PaymentForm appointment={appointment} />
</Elements> </div></Sidebar>
</>
)


}
export default StripeContainer;