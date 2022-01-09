import React from 'react';
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { InputBoxStyle } from './common/InputBox/InputBox.style';

function Footer(props) {
    return (
        <div>
            <div className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-box about-widget">
                                <h2 className="widget-title">About us</h2>
                                <p>Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-box get-in-touch">
                                <h2 className="widget-title">Get in Touch</h2>
                                <ul>
                                    <li>34/8, East Hukupara, Gifirtok, Sadan.</li>
                                    <li>support@fruitkha.com</li>
                                    <li>+00 111 222 3333</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-box pages">
                                <h2 className="widget-title">Pages</h2>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/shop">Shop</Link></li>
                                    <li><Link to="/news">News</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-box subscribe">
                                <h2 className="widget-title">Subscribe</h2>
                                <p>Subscribe to our mailing list to get the latest updates.</p>
                                <form action="index.html" className='d-flex align-items-center'>
                                    <InputBoxStyle type="email" placeholder="Email" />
                                    <button type="submit"><i className="fas fa-paper-plane" /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <p>Copyrights © 2019 - 
                            <Link to={{pathname:"https://imransdesign.com/"}} target="_blank">
                                Imran Hossain
                            </Link>,  All Rights Reserved.<br />
                                Distributed By -
                            <Link to={{pathname:"https://themewagon.com/"}} target="_blank">
                                Themewagon
                            </Link>
                            </p>
                        </div>
                        <div className="col-lg-6 text-right col-md-12">
                            <div className="social-icons">
                                <ul>
                                    <li>
                                        <Link to={{pathname:"https://www.facebook.com/"}} target="_blank">
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={{pathname:"https://www.twitter.com/"}} target="_blank">
                                            <i className="fab fa-twitter" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={{pathname:"https://www.instagram.com/"}} target="_blank">
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={{pathname:"https://www.linkedin.com/"}} target="_blank">
                                            <i className="fab fa-linkedin" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={{pathname:"https://www.dribbble.com/"}} target="_blank">
                                            <i className="fab fa-dribbble" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;