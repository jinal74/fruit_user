import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button, { ButtonType } from '../components/common/Button/Button';
import InputBox from '../components/common/InputBox/InputBox';

const productData = [
    {
        id: 101,
        name: "Strawberry",
        price: 85,
        imgPath: "assets/img/products/product-img-1.jpg"
    },
    {
        id: 102,
        name: "Black Grapes",
        price: 70,
        imgPath: "assets/img/products/product-img-2.jpg"
    },
    {
        id: 103,
        name: "Lemon",
        price: 35,
        imgPath: "assets/img/products/product-img-3.jpg"
    },
    {
        id: 104,
        name: "Kiwi",
        price: 50,
        imgPath: "assets/img/products/product-img-4.jpg"
    },
    {
        id: 105,
        name: "Green Apple",
        price: 45,
        imgPath: "assets/img/products/product-img-5.jpg"
    },
    {
        id: 106,
        name: "Raspberry",
        price: 80,
        imgPath: "assets/img/products/product-img-6.jpg"
    }
]

function Shop(props) {
    const [filter, setFilter] = useState();
    const [sortData, setSortData] = useState();
    const [sort, setSort] = useState();

    const handleSearch = (s) => {
        console.log(s)
        if (s !== "") {
            let filterData = productData.filter((item) => (
                item.name.toString().toLowerCase().includes(s.toLowerCase()) ||
                item.price.toString().includes(s)
            ))

            //console.log(filterData)
            setFilter(filterData)
        } else {
            setFilter()
            handleSort(sort, true)
        }
    }

    const handleSort = (s, empty=false) => {
        let sort = !empty && filter ? filter : productData
        setSort(s)

        if (s !== "0") {
            let sData = sort.sort((x,y) => {
                if (s === "hl") {
                    return y.price - x.price;
                } else if (s === "lh") {
                    return x.price - y.price
                }
            })
            setSortData([...sData])
        }
    }

    let fData = filter ? filter : sortData ? sortData : productData

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

            {/* products */}
            <div className="product-section mt-150 mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-6 mb-5">
                            <InputBox
                                onChange={(e) => handleSearch(e.target.value)}
                                placeholder="Search here..."
                                className="w-100 border-secondary"
                            />
                        </div>
                        <div className="col-6 mb-5">
                            <InputBox
                                type="select"
                                className="w-100 border-secondary"
                                onChange={(e) => handleSort(e.target.value)}
                            >
                                <option value="0">-- : --  Sort  -- : --</option>
                                <option value="hl">High to low</option>
                                <option value="lh">Low to high</option>
                            </InputBox>
                        </div>
                    </div>
                    
                    <div className="row">
                        {
                            fData !== undefined ?
                            fData.map((m) => {
                                return (
                                    <div className="col-4 text-center" key={m.id.toString()}>
                                        <div className="single-product-item">
                                            {
                                                m.imgPath !== undefined ? 
                                                <div className="product-image">
                                                <Link to="/singleProduct">
                                                    <img 
                                                        src={m.imgPath}
                                                        // src="assets/img/products/product-img-1.jpg" 
                                                        alt="" 
                                                    />
                                                </Link>
                                            </div> 
                                            : null
                                            }
                                            {
                                                m.name !== undefined ? 
                                                    <h3>{m.name}</h3>
                                                : null
                                            }
                                            {
                                                m.price !== undefined ? 
                                                <p className="product-price">
                                                    <span>Per Kg</span> {m.price}$ 
                                                </p>
                                                : null
                                            }
                                            <Link to="/cart">
                                                <Button buttonType={ButtonType.Primary}>
                                                    <i className="fas fa-shopping-cart" /> Add to Cart
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            }) : null
                        }
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
        </div>

    );
}

export default Shop;
