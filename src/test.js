import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
	.collection('users')
	.doc('aP4WVZzW1SAjMrN83Oby')
	.collection('cartItems')
	.doc('O5imhWHmx6esjc3dOkJ2');

firestore.doc(
	'/users/aP4WVZzW1SAjMrN83Oby/cartItems/O5imhWHmx6esjc3dOkJ2'
);

firestore.collection('/users/aP4WVZzW1SAjMrN83Oby/cartItems/');
