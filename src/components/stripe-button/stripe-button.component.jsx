import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	// const priceForStripe = price * 100;
	const publishableKey = 'pk_test_yc9ROZOaL2HRntywMqLEB0jq00kmCbHVuQ';

	const onToken = (token) => {
		console.log(token);
		alert('payment successful');
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='Crown Clothing'
			billingAddress
			shippingAddress
			bitcoin
			image='../../assets/crown.ico'
			description={`Your total is $${price}`}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
