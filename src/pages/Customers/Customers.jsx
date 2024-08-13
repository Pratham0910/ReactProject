import React, { useState, useEffect } from 'react';
import './Customers.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import ProductCard from "../../components/ProductCard/ProductCard";
import useCart from '../../components/Cart/UseCart';
import CartPopup from '../../components/Cart/CartPopup/CartPopup';

const Customers = ({searchTerm}) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [filter, setFilter] = useState('all');
	const [isCartOpen, setIsCartOpen] = useState();
	const { cartItems, addItemToCart, removeItemFromCart, updateItemQuantity, clearCart } = useCart();

	useEffect(() => {
		setLoading(true);
		fetch('http://localhost:8080/products')
			.then(response => response.json())
			.then(data => {
				setData(data);
				setLoading(false);
			});
	}, []);

	const filteredData = data.filter(product => {
		if (filter === 'all') return true;
		return product.category === filter;
	});

	return (
		<>
			<NavBar />
			<div className="container products">
				<div className="filters">
					<button className={`btn btn-lg allProducts ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
						All Products
					</button>

					<button className={`btn btn-lg Medicine ${filter === 'Medicine' ? 'active' : ''}`} onClick={() => setFilter('Medicine')}>
						Medicines
					</button>

					<button className={`btn btn-lg Cosmetic ${filter === 'Cosmetic' ? 'active' : ''}`} onClick={() => setFilter('Cosmetic')}>
						Cosmetics
					</button>

					<button onClick={() => setIsCartOpen(true)} className="btn btn-lg btn-secondary goToCart">Go to Cart</button>
				</div>


				{loading ? (
					<p>Loading...</p>
				) : (
					<div className="row align-items-center">
						{filteredData.map((product) => (
							<div key={product.id} className="col-md-4 product">
								<ProductCard
									product={product}
									addToCart={addItemToCart}
								/>
							</div>
						))}
					</div>
				)}
			</div>

			{isCartOpen && (
				<CartPopup
					cartItems={cartItems}
					updateItemQuantity={updateItemQuantity}
					removeItemFromCart={removeItemFromCart}
					clearCart={clearCart}
					onClose={() => setIsCartOpen(false)}
				/>
			)}
			{console.log(cartItems)}
			<Footer />
		</>
	);
};

export default Customers;
