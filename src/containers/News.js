import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button, { ButtonType } from '../components/common/Button/Button';

function News(props) {
    return (
        <div>
            {/* breadcrumb-section */}
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p>Organic Information</p>
                                <h1>News Article</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end breadcrumb section */}
            {/* latest news */}
            <div className="latest-news mt-150 mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-latest-news">
                                <Link to="/singleNews"><div className="latest-news-bg news-bg-1" /></Link>
                                <div className="news-text-box">
                                    <h3>
                                        <Link to="/singleNews">You will vainly look for fruit on it in autumn.</Link>
                                    </h3>
                                    <p className="blog-meta">
                                        <span className="author"><i className="fas fa-user" /> Admin</span>
                                        <span className="date"><i className="fas fa-calendar" /> 27 December, 2019</span>
                                    </p>
                                    <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
                                    <Link to="/singleNews">
                                        <Button buttonType={ButtonType.Link}>
                                            read more 
                                            <i className="fas fa-angle-right" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-latest-news">
                                <Link to="/singleNews"><div className="latest-news-bg news-bg-2" /></Link>
                                <div className="news-text-box">
                                    <h3>
                                        <Link to="/singleNews">A man's worth has its season, like tomato.</Link>
                                    </h3>
                                    <p className="blog-meta">
                                        <span className="author"><i className="fas fa-user" /> Admin</span>
                                        <span className="date"><i className="fas fa-calendar" /> 27 December, 2019</span>
                                    </p>
                                    <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
                                    <Link to="/singleNews">
                                        <Button buttonType={ButtonType.Link}>
                                            read more 
                                            <i className="fas fa-angle-right" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-latest-news">
                                <Link to="/singleNews"><div className="latest-news-bg news-bg-3" /></Link>
                                <div className="news-text-box">
                                    <h3>
                                        <Link to="/singleNews">Good thoughts bear good fresh juicy fruit.</Link>
                                    </h3>
                                    <p className="blog-meta">
                                        <span className="author"><i className="fas fa-user" /> Admin</span>
                                        <span className="date"><i className="fas fa-calendar" /> 27 December, 2019</span>
                                    </p>
                                    <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
                                    <Link to="/singleNews">
                                        <Button buttonType={ButtonType.Link}>
                                            read more 
                                            <i className="fas fa-angle-right" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-latest-news">
                                <Link to="/singleNews"><div className="latest-news-bg news-bg-4" /></Link>
                                <div className="news-text-box">
                                    <h3><Link to="/singleNews">Fall in love with the fresh orange</Link></h3>
                                    <p className="blog-meta">
                                        <span className="author"><i className="fas fa-user" /> Admin</span>
                                        <span className="date"><i className="fas fa-calendar" /> 27 December, 2019</span>
                                    </p>
                                    <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
                                    <Link to="/singleNews">
                                        <Button buttonType={ButtonType.Link}>
                                            read more 
                                            <i className="fas fa-angle-right" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-latest-news">
                                <Link to="/singleNews"><div className="latest-news-bg news-bg-5" /></Link>
                                <div className="news-text-box">
                                    <h3><Link to="/singleNews">Why the berries always look delecious</Link></h3>
                                    <p className="blog-meta">
                                        <span className="author"><i className="fas fa-user" /> Admin</span>
                                        <span className="date"><i className="fas fa-calendar" /> 27 December, 2019</span>
                                    </p>
                                    <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
                                    <Link to="/singleNews">
                                        <Button buttonType={ButtonType.Link}>
                                            read more 
                                            <i className="fas fa-angle-right" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-latest-news">
                                <Link to="/singleNews"><div className="latest-news-bg news-bg-6" /></Link>
                                <div className="news-text-box">
                                    <h3><Link to="/singleNews">Love for fruits are genuine of John Doe</Link></h3>
                                    <p className="blog-meta">
                                        <span className="author"><i className="fas fa-user" /> Admin</span>
                                        <span className="date"><i className="fas fa-calendar" /> 27 December, 2018</span>
                                    </p>
                                    <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
                                    <Link to="/singleNews">
                                        <Button buttonType={ButtonType.Link}>
                                            read more 
                                            <i className="fas fa-angle-right" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <div className="pagination-wrap">
                                        <ul>
                                            <li><Link>Prev</Link></li>
                                            <li><Link className='active'>1</Link></li>
                                            <li><Link>2</Link></li>
                                            <li><Link>3</Link></li>
                                            <li><Link>Next</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end latest news */}
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

export default News;