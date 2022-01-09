import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <div className="top-header-area" id="sticker" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-sm-12 text-center">
                        <div className="main-menu-wrap">
                            <div className="site-logo">
                                <Link>
                                    <img src="assets/img/logo.png" alt="" />
                                </Link>
                            </div>
                            <nav className="main-menu">
                                <ul>
                                    <li className="current-list-item">
                                        <Link to="/">Home</Link>
                                        <ul className="sub-menu">
                                            <li><Link exact to="/">Static Home</Link></li>
                                            {/* <li><Link to="/sliderhome">Slider Home</Link></li> */}
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                    <li><Link to="/">Pages</Link>
                                        <ul className="sub-menu">
                                            <li><Link to="/Err404">404 page</Link></li>
                                            <li><Link to="/about">About</Link></li>
                                            <li><Link to="/cart">Cart</Link></li>
                                            <li><Link to="/contact">Contact</Link></li>
                                            <li><Link to="/news">News</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/news">News</Link>
                                        <ul className="sub-menu">
                                            <li><Link to="/news">News</Link></li>
                                            <li><Link to="/singleNews">Single News</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    <li><Link to="/shop">Shop</Link>
                                        <ul className="sub-menu">
                                            <li><Link to="/checkOut">Check Out</Link></li>
                                            <li><Link to="/singleProduct">Single Product</Link></li>
                                            <li><Link to="/cart">Cart</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="header-icons">
                                            <NavLink to="/cart" className="shopping-cart"><i className="fas fa-shopping-cart" /></NavLink>
                                            <NavLink to="/search" className="mobile-hide search-bar-icon"><i className="fas fa-search" /></NavLink>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                            <NavLink to="/search" className="mobile-show search-bar-icon">
                                <i className="fas fa-search" />
                            </NavLink>
                            <div className="mobile-menu"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;