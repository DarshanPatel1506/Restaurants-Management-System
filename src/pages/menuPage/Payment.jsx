import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from './CheckoutForm';
import useCart from '../../hooks/useCart';




const stripePromise = loadStripe
("pk_test_51OwHAFSFmZUxKFRwibNN7UCFgC8x2GIUiVE67kPbXRDaP5u63Ou2bj6asql36wwzeAlGAKvF5LEryHThzPaypIoY00tO42ENZC");


const Payment = () => {
    const [cart] = useCart();
    console.log(cart)
    // checkout price 
    const cartTotal = cart.reduce((sum, item) => sum + item.price , 0) 
   
   const totalPrice = parseFloat(cartTotal.toFixed(2));
  
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 py-28'>
        <Elements stripe={stripePromise}>
      <CheckoutForm price={totalPrice} cart={cart}/>
    </Elements>
    </div>
  )
}

export default Payment