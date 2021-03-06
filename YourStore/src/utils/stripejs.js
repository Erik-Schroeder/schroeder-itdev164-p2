/**
 * This is a singleton to ensure we only instantiate Stripe once.
 */
 import { loadStripe } from "@stripe/stripe-js"
 let stripePromise
 const GetStripe = () => {
   if (!stripePromise) {
     stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY)
   }
   return stripePromise
 }
 export default GetStripe