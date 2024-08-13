// CartPopup.jsx
import React from 'react';
import './CartPopup.css';
import { useUser } from '../../User/UserContext';

const CartPopup = ({ cartItems, updateItemQuantity, removeItemFromCart, clearCart, onClose }) => {
	const { user } = useUser();

	const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

	function handlePlaceOrder() {
		const orderData = {
			user: {
				name: user.name,
				phone: user.phno,
				email: user.mail,
			},
			cartItems,
			totalAmount,
		};

		fetch('http://localhost:9000/orders', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(orderData),
		})
			.then(response => response.json())
			.then(data => {
				alert('Order placed successfully!');
				clearCart();
				onClose();
			})
			.catch(error => {
				console.error('Error placing order:', error);
			});
	}

	return (
		<div className="cart-popup-overlay">
			<div className="cart-popup">
				<button className="close-btn btn btn-danger" onClick={onClose}>Close</button>
				<h2>Cart</h2>
				<div className="cart-items container">
					{cartItems.length === 0 ? (
						<p>Your cart is empty</p>
					) : (
						cartItems.map(item => (
							<div key={item.id} className="cart-item">
								<div className="row align-items-center cartItmes">
									<div className="col-md-4 productTitle">
										<h5>{item.product_name}</h5>
									</div>
									<div className="col-md-4 productQuantity">
										<p>Quantity: {item.quantity}</p>
										<button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className='btn btn-outline-secondary increase'>+</button>
										<button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className='btn btn-outline-secondary decrease'>-</button>
									</div>
									<div className="col-md-4 productRemove">
										<button onClick={() => removeItemFromCart(item.id)} className="btn btn-outline-secondary">Remove</button>
									</div>
								</div>
							</div>
						))
					)}
				</div>
				<div className="total-amount">
					<h3>Total: Rs. {totalAmount.toFixed(2)}/-</h3>
				</div>
				<button className="placeOrder btn btn-lg" onClick={handlePlaceOrder}>Place Order</button>
				<button className="clear-cart-btn btn-dark" onClick={clearCart}>Clear Cart</button>
			</div>
		</div>
	);
};

export default CartPopup;
