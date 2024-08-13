import React from 'react';
import './ProductCard.css';

function ProductCard({ product, addToCart }) {
    const title = product.product_name;
    const company = product.product_company;
    const generic = product.generic_name[0];
    const icd = product.icd10_code;
    const price = product.price

    return (
        <div>
            <div className="card productCard" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="productName">{title.length > 22 ? (title.slice(0, 22) + '...') : title}</h5>
                    <p className="productCompany">{company.length > 26 ? (company.slice(0, 26) + '...') : company}</p>
                    <p className="genericName">{generic}</p>
                    <p className="icdCode">{icd}</p>
                    <p className='price'>Rs. {price}/-</p>
                    <button onClick={() => addToCart(product)} className="btn btn-dark">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
