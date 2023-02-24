const express = require("express")
const app = express()
require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

app.post("/payment", cors(), async (req, res) => {
	let { amount, id } = req.body
	try {
		const {id:pId} = await stripe.paymentIntents.create({
			amount:amount*100,
			currency: "USD",
			description:'Appointment booked',
			payment_method: id,
			confirm: true
		})

		console.log("gggg", pId)
		res.json({
			message: "Payment successful",
			success: true,
			paymentId: pId
		})
	} catch (error) {
		res.json({
			message: "Payment failed",
			success: false
		})
	}
})

app.get("/refund", cors(), async (req, res) => {
	let { paymentId } = req.body
	try {
		await stripe.refunds.create({
			payment_intent: paymentId
		})
		res.status(200).json({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		res.json({
			message: "Payment failed",
			success: false
		})
	}
})

app.listen(process.env.PORT || 4000, () => {
	console.log("Sever is listening on port 4000")
})

