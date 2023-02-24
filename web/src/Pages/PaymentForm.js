import React ,{useState} from 'react'   
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import  './Paymentform.css';
import logo from "../assets/success.gif";
import {Link} from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase-config';

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "gray",
			color: "white",
			fontWeight: 700,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "29px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "white" }
		},
		invalid: {
			iconColor: "red",
			color: "red"
		}
	}
}



function PaymentForm({appointment}){
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })  

    if(!error){
        try{
            const {id} = paymentMethod
            const response = await axios.post("https://server-ten-ruby.vercel.app/api/payment", {
                amount: 20,
                id,

            }, {'Content-Type':'application/json;charset=utf-8', 'Access-Control-Allow-Origin':''})
            if(response.data.success) {
               try{
                console.log(response.data.paymentId)
                await addDoc(collection(db, 'appointments'),{
                    
                        paymentId: response.data.paymentId,
                        ...appointment,
                        status: 'active'
                    
                }
                )
                console.log("ABC");

                setSuccess(true)
               }catch(e){
                console.log(e)
               }
            }

        }catch(error){
            console.log("Error", error)
        }
    }
    else {
        console.log(error.message)
    }

}
return(
<div>
{!success ? 
<div className='payment-container'>
        <form onSubmit={handleSubmit}>
            <fieldset className="Form-Group">
                <div className="Form-Row">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button className='pay-button'>Pay 20$</button>
        </form></div>
        :
       <div>
           <div><h1 style={{color:'#35414F', marginLeft:690, marginTop:70,fontFamily: "Arial, Helvetica, sans-serif", fontWeight:"bold"}}>Your booking is confirmed</h1></div>
    <div className="border"> <div className="success-box"> <img src={logo} alt="loading..." style={{width:300 ,height:300}}/> </div> </div>
    <Link to="/home">
            <div>
              <button type="submit" className="success-button">
                Back to Home
              </button></div></Link> 
       </div> 
       
        }
       
</div>

)}

export default PaymentForm;