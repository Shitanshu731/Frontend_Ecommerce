import {Elements, PaymentElement, useElements, useStripe} from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import toast from "react-hot-toast";
import { Navigate, useLoaderData, useLocation, useNavigate } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PUBLIC_KEY);
const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();  
    const [isProcessing,setIsProcesing] = useState<boolean>(false);
    const submitHandler = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!stripe || !elements) return;
        setIsProcesing(true);
        const order = {};
        const {paymentIntent, error} = await stripe.confirmPayment({
        elements,
        confirmParams : {return_url : window.location.origin},
        redirect : "if_required",});
        if(error) {
            setIsProcesing(false);
            return toast.error(error.message || "Something Went Wrong") 
        }
        if(paymentIntent.status === "succeeded"){
                console.log("Placing Order");
                navigate("/orders")
            }
            setIsProcesing(false)
};
    return (
        <div>
            <form onSubmit={submitHandler}>
                <PaymentElement />
                <button type="submit" disabled={isProcessing}>{isProcessing ? "Processing..." : "Pay" }</button>
            </form>
        </div>
    )
}
const Checkout = () => {
  return <Elements 
  options={{
    clientSecret : import.meta.env.VITE_CLIENT_SECRET,
  }}
  stripe={stripePromise}>
    <CheckOutForm />
  </Elements>
}

export default Checkout;
