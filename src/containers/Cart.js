import React from 'react';
import { Link } from 'react-router-dom';
import Button, { ButtonType } from '../components/common/Button/Button';
import InputBox from '../components/common/InputBox/InputBox';

function Cart(props) {

    return (
        <div>
            {/* breadcrumb-section */}
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p>Fresh and Organic</p>
                                <h1>Cart</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end breadcrumb section */}
            {/* cart */}
            <div className="cart-section mt-150 mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="cart-table-wrap">
                                <table className="cart-table">
                                    <thead className="cart-table-head">
                                        <tr className="table-head-row">
                                            <th className="product-remove"></th>
                                            <th className="product-image">Product Image</th>
                                            <th className="product-name">Name</th>
                                            <th className="product-price">Price</th>
                                            <th className="product-quantity">Quantity</th>
                                            <th className="product-total">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="table-body-row">
                                            <td className="product-remove"><Link><i className="far fa-window-close" /></Link></td>
                                            <td className="product-image"><img src="assets/img/products/product-img-1.jpg" alt="" /></td>
                                            <td className="product-name">Strawberry</td>
                                            <td className="product-price">$85</td>
                                            <td className="product-quantity px-3"><InputBox type="number" placeholder={0} /></td>
                                            <td className="product-total">1</td>
                                        </tr>
                                        <tr className="table-body-row">
                                            <td className="product-remove"><Link><i className="far fa-window-close" /></Link></td>
                                            <td className="product-image"><img src="assets/img/products/product-img-2.jpg" alt="" /></td>
                                            <td className="product-name">Berry</td>
                                            <td className="product-price">$70</td>
                                            <td className="product-quantity px-3"><InputBox type="number" placeholder={0} /></td>
                                            <td className="product-total">1</td>
                                        </tr>
                                        <tr className="table-body-row">
                                            <td className="product-remove"><Link><i className="far fa-window-close" /></Link></td>
                                            <td className="product-image"><img src="assets/img/products/product-img-3.jpg" alt="" /></td>
                                            <td className="product-name">Lemon</td>
                                            <td className="product-price">$35</td>
                                            <td className="product-quantity px-3"><InputBox type="number" placeholder={0} /></td>
                                            <td className="product-total">1</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="total-section">
                                <table className="total-table">
                                    <thead className="total-table-head">
                                        <tr className="table-total-row">
                                            <th>Total</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="total-data">
                                            <td><strong>Subtotal: </strong></td>
                                            <td>$500</td>
                                        </tr>
                                        <tr className="total-data">
                                            <td><strong>Shipping: </strong></td>
                                            <td>$45</td>
                                        </tr>
                                        <tr className="total-data">
                                            <td><strong>Total: </strong></td>
                                            <td>$545</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="cart-buttons">
                                    <Link to="/cart">
                                        <Button buttonType={ButtonType.Primary}>Update Cart</Button>
                                    </Link>
                                    <Link to="/checkOut">
                                        <Button buttonType={ButtonType.Primary}>Check Out</Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="coupon-section">
                                <h3>Apply Coupon</h3>
                                <div>
                                    <div className="coupon-form-wrap">
                                        <InputBox
                                            type="text"
                                            placeholder="Coupon"
                                            name="coupon"
                                            id="coupon"
                                        />
                                        <Button
                                            type="submit"
                                            buttonType={ButtonType.Primary}
                                        >Submit
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end cart */}
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

export default Cart;