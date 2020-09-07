import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HO01WGnhqX3i3QZ4YplDeHfdsyu1HCStjCJ94IthL928ChUT7Bf9yPHIFVus8Jb5ao8LQMpYK40fDB0RVpzL79a005mW7MhPw';

    const onPaymentToken = token => {
        console.log(token);
        alert('Payment successful')
    }
    return (
        <StripeCheckout
            label='Pay now'
            name='ISISES Pvt. Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price} `}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onPaymentToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;