import React from 'react';
import { Link } from 'react-router-dom';
import Button, { ButtonType } from '../components/common/Button/Button'
import InputBox from '../components/common/InputBox/InputBox';
import * as yup from 'yup';
import { Form, FormikProvider, useFormik } from 'formik';

function Checkout(props) {
    let contactSchema = {
        name: yup.string()
            .required("Username is must required"),
        email: yup.string()
            .required('E-mail is must required')
            .email('Invalid email address'),
        address: yup.string()
            .required("Address is must required"),
        phone: yup.number()
            .required('Mobile number is must required'),
        bill: yup.string()
            .required("Message is must required")
    }

    let schema = yup.object().shape(contactSchema);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            address: '',
            phone: '',
            bill: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            console.log(values)
        },
    });

    const { handleSubmit, errors, getFieldProps, touched } = formik;
    return (
        <div>
            {/* breadcrumb-section */}
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p>Fresh and Organic</p>
                                <h1>Check Out Product</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* check out section */}
            <div className="checkout-section mt-150 mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="checkout-accordion-wrap">
                                <div className="accordion" id="accordionExample">
                                    <div className="card single-accordion">
                                        <div className="card-header" id="headingOne">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Billing Address
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className="billing-address-form">
                                                    <div action="index.html">
                                                        <FormikProvider value={formik}>
                                                            <Form onSubmit={handleSubmit}>
                                                                <p>
                                                                    <InputBox 
                                                                        type="text" 
                                                                        placeholder="Name"
                                                                        name="name"
                                                                        id="name" 
                                                                        {...getFieldProps("name")}
                                                                        errors={Boolean(errors.name && touched.name)}
                                                                        errorMessage={(errors.name && touched.name) && errors.name}
                                                                    />
                                                                </p>
                                                                <p>
                                                                    <InputBox 
                                                                        type="email" 
                                                                        placeholder="Email" 
                                                                        name="email"
                                                                        id="email"
                                                                        {...getFieldProps("email")}
                                                                        errors={Boolean(errors.email && touched.email)}
                                                                        errorMessage={(errors.email && touched.email) && errors.email}
                                                                    />
                                                                </p>
                                                                <p>
                                                                    <InputBox 
                                                                        type="text" 
                                                                        placeholder="Address" 
                                                                        name="address"
                                                                        id="address"
                                                                        {...getFieldProps("address")}
                                                                        errors={Boolean(errors.address && touched.address)}
                                                                        errorMessage={(errors.address && touched.address) && errors.address}
                                                                    />
                                                                </p>
                                                                <p>
                                                                    <InputBox 
                                                                        type="tel" 
                                                                        placeholder="Phone" 
                                                                        name="phone"
                                                                        id="phone"
                                                                        {...getFieldProps("phone")}
                                                                        errors={Boolean(errors.phone && touched.phone)}
                                                                        errorMessage={(errors.phone && touched.phone) && errors.phone}
                                                                    />
                                                                </p>
                                                                <p>
                                                                    <InputBox 
                                                                        type="textarea" 
                                                                        name="bill" 
                                                                        id="bill" 
                                                                        placeholder="Say Something" 
                                                                        {...getFieldProps("bill")}
                                                                        errors={Boolean(errors.bill && touched.bill)}
                                                                        errorMessage={(errors.bill && touched.bill) && errors.bill}
                                                                    />
                                                                </p>
                                                                <p>
                                                                    <Button buttonType={ButtonType.Primary} type="submit">
                                                                        Send
                                                                    </Button>
                                                                </p>
                                                            </Form>
                                                        </FormikProvider>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card single-accordion">
                                        <div className="card-header" id="headingTwo">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Shipping Address
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className="shipping-address-form">
                                                    <p>Your shipping address form is here.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card single-accordion">
                                        <div className="card-header" id="headingThree">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Card Details
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className="card-details">
                                                    <p>Your card details goes here.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="order-details-wrap">
                                <table className="order-details">
                                    <thead>
                                        <tr>
                                            <th>Your order Details</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody className="order-details-body">
                                        <tr>
                                            <td>Product</td>
                                            <td>Total</td>
                                        </tr>
                                        <tr>
                                            <td>Strawberry</td>
                                            <td>$85.00</td>
                                        </tr>
                                        <tr>
                                            <td>Berry</td>
                                            <td>$70.00</td>
                                        </tr>
                                        <tr>
                                            <td>Lemon</td>
                                            <td>$35.00</td>
                                        </tr>
                                    </tbody>
                                    <tbody className="checkout-details">
                                        <tr>
                                            <td>Subtotal</td>
                                            <td>$190</td>
                                        </tr>
                                        <tr>
                                            <td>Shipping</td>
                                            <td>$50</td>
                                        </tr>
                                        <tr>
                                            <td>Total</td>
                                            <td>$240</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Link to="/cart">
                                    <Button buttonType={ButtonType.Primary}>
                                        Place Order
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
        </div>
    );
}

export default Checkout;