import React from 'react';
import { Link } from 'react-router-dom';
import Button, { ButtonType } from '../components/common/Button/Button';

function Shop(props) {
    return (
        <div>
            {/* breadcrumb-section */}
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p>Fresh and Organic</p>
                                <h1>Shop</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end breadcrumb section */}
            {/* products */}
            <div className="product-section mt-150 mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="product-filters">
                                <ul>
                                    <li className="active" data-filter="*">All</li>
                                    <li data-filter=".strawberry">Strawberry</li>
                                    <li data-filter=".berry">Berry</li>
                                    <li data-filter=".lemon">Lemon</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row product-lists">
                        <div className="col-lg-4 col-md-6 text-center strawberry">
                            <div className="single-product-item">
                                <div className="product-image">
                                    <Link to="/singleProduct"><img src="assets/img/products/product-img-1.jpg" alt="" /></Link>
                                </div>
                                <h3>Strawberry</h3>
                                <p className="product-price"><span>Per Kg</span> 85$ </p>
                                <Link to="/cart">
                                    <Button buttonType={ButtonType.Primary}>
                                        <i className="fas fa-shopping-cart" /> Add to Cart
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center berry">
                            <div className="single-product-item">
                                <div className="product-image">
                                    <Link to="/singleProduct"><img src="assets/img/products/product-img-2.jpg" alt="" /></Link>
                                </div>
                                <h3>Berry</h3>
                                <p className="product-price"><span>Per Kg</span> 70$ </p>
                                <Link to="/cart">
                                    <Button buttonType={ButtonType.Primary}>
                                        <i className="fas fa-shopping-cart" /> Add to Cart
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center lemon">
                            <div className="single-product-item">
                                <div className="product-image">
                                    <Link to="/singleProduct"><img src="assets/img/products/product-img-3.jpg" alt="" /></Link>
                                </div>
                                <h3>Lemon</h3>
                                <p className="product-price"><span>Per Kg</span> 35$ </p>
                                <Link to="/cart">
                                    <Button buttonType={ButtonType.Primary}>
                                        <i className="fas fa-shopping-cart" /> Add to Cart
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center">
                            <div className="single-product-item">
                                <div className="product-image">
                                    <Link to="/singleProduct"><img src="assets/img/products/product-img-4.jpg" alt="" /></Link>
                                </div>
                                <h3>Avocado</h3>
                                <p className="product-price"><span>Per Kg</span> 50$ </p>
                                <Link to="/cart">
                                    <Button buttonType={ButtonType.Primary}>
                                        <i className="fas fa-shopping-cart" /> Add to Cart
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center">
                            <div className="single-product-item">
                                <div className="product-image">
                                    <Link to="/singleProduct"><img src="assets/img/products/product-img-5.jpg" alt="" /></Link>
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
                        <div className="col-lg-4 col-md-6 text-center strawberry">
                            <div className="single-product-item">
                                <div className="product-image">
                                    <Link to="/singleProduct"><img src="assets/img/products/product-img-6.jpg" alt="" /></Link>
                                </div>
                                <h3>Strawberry</h3>
                                <p className="product-price"><span>Per Kg</span> 80$ </p>
                                <Link to="/cart">
                                    <Button buttonType={ButtonType.Primary}>
                                        <i className="fas fa-shopping-cart" /> Add to Cart
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center pt-100">
                            <div className="pagination-wrap pt-150">
                                <ul>
                                    <li><Link>Prev</Link></li>
                                    <li><Link>1</Link></li>
                                    <li><Link>2</Link></li>
                                    <li><Link className="active">3</Link></li>
                                    <li><Link>Next</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end products */}
            {/* logo carousel */}
            <div className="logo-carousel-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="logo-carousel-inner">
                                <div className="single-logo-item">
                                    <img src="assets/img/company-logos/1.png" alt="" />
                                </div>
                                <div className="single-logo-item">
                                    <img src="assets/img/company-logos/2.png" alt="" />
                                </div>
                                <div className="single-logo-item">
                                    <img src="assets/img/company-logos/3.png" alt="" />
                                </div>
                                <div className="single-logo-item">
                                    <img src="assets/img/company-logos/4.png" alt="" />
                                </div>
                                <div className="single-logo-item">
                                    <img src="assets/img/company-logos/5.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end logo carousel */}
        </div>

    );
}

export default Shop;