import React from 'react';
import Button, { ButtonType } from '../components/common/Button/Button';
import InputBox from '../components/common/InputBox/InputBox';
import * as yup from 'yup';
import { Form, FormikProvider, useFormik } from 'formik';

function Contact(props) {
    let contactSchema = {
        name: yup.string()
            .required("Username is must required"),
        email: yup.string()
            .required('E-mail is must required')
            .email('Invalid email address'),
        phone: yup.number()
            .required('Mobile number is must required'),
        subject: yup.string()
            .required("Subject is must required"),
        message: yup.string()
            .required("Message is must required")
    }

    let schema = yup.object().shape(contactSchema);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
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
                                <p>Get 24/7 Support</p>
                                <h1>Contact us</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end breadcrumb section */}
            {/* contact form */}
            <div className="contact-form-section mt-150 mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mb-5 mb-lg-0">
                            <div className="form-title">
                                <h2>Have you any question?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ratione! Laboriosam est, assumenda. Perferendis, quo alias quaerat aliquid. Corporis ipsum minus voluptate? Dolore, esse natus!</p>
                            </div>

                            <FormikProvider value={formik}>
                                <Form onSubmit={handleSubmit}>
                                    <div id="form_status" />
                                    <div className="contact-form">
                                            <InputBox
                                                type="text"
                                                placeholder="Name"
                                                name="name"
                                                id="name"
                                                {...getFieldProps("name")}
                                                errors={Boolean(errors.name && touched.name)}
                                                errorMessage={(errors.name && touched.name) && errors.name}
                                            />
                                            <InputBox
                                                type="email"
                                                placeholder="Email"
                                                name="email"
                                                id="email"
                                                {...getFieldProps("email")}
                                                errors={Boolean(errors.email && touched.email)}
                                                errorMessage={(errors.email && touched.email) && errors.email}
                                            />
                                            <InputBox
                                                type="text"
                                                placeholder="Phone"
                                                name="phone"
                                                id="phone"
                                                {...getFieldProps("phone")}
                                                errors={Boolean(errors.phone && touched.phone)}
                                                errorMessage={(errors.phone && touched.phone) && errors.phone}
                                            />
                                            <InputBox
                                                type="text"
                                                placeholder="Subject"
                                                name="subject"
                                                id="subject"
                                                {...getFieldProps("subject")}
                                                errors={Boolean(errors.subject && touched.subject)}
                                                errorMessage={(errors.subject && touched.subject) && errors.subject}
                                            />
                                            <InputBox
                                                type="textarea"
                                                name="message"
                                                id="message"
                                                placeholder="Message"
                                                {...getFieldProps("message")}
                                                errors={Boolean(errors.message && touched.message)}
                                                errorMessage={(errors.message && touched.message) && errors.message}
                                            />
                                        <Button buttonType={ButtonType.Primary} type="submit">Submit</Button>
                                    </div>
                                </Form>
                            </FormikProvider>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-form-wrap">
                                <div className="contact-form-box">
                                    <h4><i className="fas fa-map" /> Shop Address</h4>
                                    <p>34/8, East Hukupara <br /> Gifirtok, Sadan. <br /> Country Name</p>
                                </div>
                                <div className="contact-form-box">
                                    <h4><i className="far fa-clock" /> Shop Hours</h4>
                                    <p>MON - FRIDAY: 8 to 9 PM <br /> SAT - SUN: 10 to 8 PM </p>
                                </div>
                                <div className="contact-form-box">
                                    <h4><i className="fas fa-address-book" /> Contact</h4>
                                    <p>Phone: +00 111 222 3333 <br /> Email: support@fruitkha.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end contact form */}
            {/* find our location */}
            <div className="find-location blue-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <p> <i className="fas fa-map-marker-alt" /> Find Our Location</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* end find our location */}
            {/* google map section */}
            <div className="embed-responsive embed-responsive-21by9">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26432.42324808999!2d-118.34398767954286!3d34.09378509738966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf07045279bf%3A0xf67a9a6797bdfae4!2sHollywood%2C%20Los%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1576846473265!5m2!1sen!2sbd" width={600} height={450} frameBorder={0} style={{ border: 0 }} allowFullScreen className="embed-responsive-item" />
            </div>
            {/* end google map section */}
        </div>

    );
}

export default Contact;