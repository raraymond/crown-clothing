import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_yc9ROZOaL2HRntywMqLEB0jq00kmCbHVuQ';

	const onToken = (token) => {
		axios({
			url    : 'payment',
			method : 'post',
			data   : {
				amount : priceForStripe,
				token,
			},
		})
			.then((response) => {
				alert('alert payment succesful');
			})
			.catch((error) => {
				console.log('Payment Error: ', JSON.parse(error));
				alert(
					'There was an issue with your payment please use the provided credit card number'
				);
			});
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='Crown Clothing'
			billingAddress
			shippingAddress
			image='../../assets/crown.ico'
			description={`Your total is $${price}`}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
