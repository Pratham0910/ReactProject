import { useState } from 'react';

const useCart = () => {
	const [cartItems, setCartItems] = useState([]);

	const addItemToCart = (item) => {
		setCartItems((prevItems) => {
			const existingItemIndex = prevItems.findIndex(i => i.id === item.id);

			if (existingItemIndex !== -1) {
				console.log('Quantity Before Update: ', prevItems[existingItemIndex].quantity)

				const updatedItems = [...prevItems];
				updatedItems[existingItemIndex].quantity += 1;
				return updatedItems;
			}
			else {
				const updatedItems = [...prevItems, { ...item, quantity: 1 }];
				// alert('Product Added to the Cart')
				return updatedItems
			}
		});
	};

	const removeItemFromCart = (itemId) => {
		setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
	};

	const updateItemQuantity = (itemId, quantity) => {
		setCartItems((prevItems) => {
			return prevItems.map(item => {
				if (item.id === itemId) {
					const updatedQuantity = Math.max(quantity, 0);
					if (updatedQuantity === 0) {
						return null;
					}
					return { ...item, quantity: updatedQuantity };
				}
				return item;
			}).filter(item => item !== null);
		});
	};

	const clearCart = () => {
		setCartItems([]);
	};

	return {
		cartItems,
		addItemToCart,
		removeItemFromCart,
		updateItemQuantity,
		clearCart,
	};
};

export default useCart;
