import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

function Products(props) {
    return (
        <div className="row product-lists">
            <div className="col-lg-4 col-md-6 text-center">
                <div className="single-product-item">
                    <div className="product-image">
                        <Link to="/singleProduct">
                            <img src="assets/img/products/product-img-5.jpg" alt />
                        </Link>
                    </div>
                    <h3>Green Apple</h3>
                    <p className="product-price"><span>Per Kg</span> 45$ </p>
                    <Link to="/cart">
                        <Button buttonType={ButtonType.Primary}>
                            <i className="fas fa-shopping-cart" /> Add to Cart
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Products;