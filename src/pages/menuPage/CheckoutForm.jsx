import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ price, cart }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [cardError, setCardError] = useState(null); // Initialize cardError with null

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    if (typeof price !== "number" || price < 1) {
      console.log("price is not a number");
      return;
    }
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [price, axiosSecure]);

  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setCardError(error.message);
    } else {
      setCardError("success!");
    }

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || 'anonymous',
            email: user?.email || 'unknown'
          },
        },
      },
    );
    if (confirmError) {
      console.log(confirmError);
    }

    if (paymentIntent && paymentIntent.status === "succeeded") {
      console.log(paymentIntent.id);
      setCardError(`Your transaction is ${paymentIntent.id}`);

      const paymentInfo = {
        email: user.email,
        transitionId: paymentIntent.id,
        price,
        orderTotal: orderTotal,
        quantity: cart.length,
        status: "order pending",
        itemName: cart.map(item => item.name),
        cartItems: cart.map(item => item._id),
        manuItems: cart.map(item => item.menuitemId)
      };

      axiosSecure.post('/Payments', paymentInfo)
        .then(res => {
          console.log(res.data);
          alert("Payment successful!");
          navigate('/order');
        })
        .catch(error => {
          console.error('Error processing payment info:', error);
        });
    }
  };

  const cartSubtotal = cart.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0);

  // Calculate the order total using the already declared cartSubtotal
  const orderTotal = cartSubtotal;

  return (
    <div className='flex flex-col sm:flex-row justify-start items-start gap-8'>
      <div className='md:w-1/2 w-full space-y-3'>
        <h4 className='text-lg font-bold'>Order Summary</h4>
        <p>Total Price: ₹{orderTotal.toFixed(2)}</p>
        <p>Number of Items: {cart.length}</p>
      </div>

      <div className='md:w-1/3 w-full space-y-5 card shrink-0 max:w-sm shadow-2xl bg-base-100 px-4 py-8'>
        <h4 className='text-lg font-bold'>Process Your Payment</h4>
        <h5 className='font-medium'> Credit/Debit Card</h5>

        <form onSubmit={handleSubmit}>

          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
          <button
            type='submit'
            disabled={!stripe}
            className='btn btn-sm mt-5 btn-primary w-full text-white'
          >
            Pay
          </button>
        </form>
        {cardError && <p className='text-red italic text-xs'>{cardError}</p>}
      </div>
    </div>
  );
};

export default CheckoutForm;
