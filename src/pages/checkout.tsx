import {Elements} from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_test_51P3eqBSJ2NOymvJ7ijV2SGjIpazuYGPSwDRf3qeXtc6FPPJ4YjfYRI1PWPUKQtWyms4Z0fy5DBrYcX4zDkOvGP28009g5cOI6h');
const CheckOutForm = () => {
    return (
        <div>
            CheckoutForm
        </div>
    )
}
const Checkout = () => {
  return <Elements stripe={stripePromise}>
    <CheckOutForm />
  </Elements>
}

export default Checkout
