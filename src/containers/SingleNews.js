import React from 'react';
import { Link } from 'react-router-dom';
import Button, { ButtonType } from '../components/common/Button/Button';
import InputBox from '../components/common/InputBox/InputBox';
import * as yup from "yup";
import { Form, FormikProvider, useFormik } from "formik";

function SingleNews(props) {

    let contactSchema = {
        name: yup.string()
            .required("Username is must required"),
        email: yup.string()
            .required('E-mail is must required')
            .email('Invalid email address'),
        comment: yup.string()
            .required("Message is must required")
    }

    let schema = yup.object().shape(contactSchema);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            comment: ''
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
                                <p>Read the Details</p>
                                <h1>Single Article</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* single article section */}
            <div className="mt-150 mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="single-article-section">
                                <div className="single-article-text">
                                    <div className="single-artcile-bg" />
                                    <p className="blog-meta">
                                        <span className="author"><i className="fas fa-user" /> Admin</span>
                                        <span className="date"><i className="fas fa-calendar" /> 27 December, 2019</span>
                                    </p>
                                    <h2>Pomegranate can prevent heart disease</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint soluta, similique quidem fuga vel voluptates amet doloremque corrupti. Perferendis totam voluptates eius error fuga cupiditate dolorum? Adipisci mollitia quod labore aut natus nobis. Rerum perferendis, nobis hic adipisci vel inventore facilis rem illo, tenetur ipsa voluptate dolorem, cupiditate temporibus laudantium quidem recusandae expedita dicta cum eum. Quae laborum repellat a ut, voluptatum ipsa eum. Culpa fugiat minus laborum quia nam! 
                                    </p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, praesentium, dicta. Dolorum inventore molestias velit possimus, dolore labore aliquam aperiam architecto quo reprehenderit excepturi ipsum ipsam accusantium nobis ducimus laudantium.
                                    </p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum est aperiam voluptatum id cupiditate quae corporis ex. Molestias modi mollitia neque magni voluptatum, omnis repudiandae aliquam quae veniam error! Eligendi distinctio, ab eius iure atque ducimus id deleniti, vel alias sint similique perspiciatis saepe necessitatibus non eveniet, quo nisi soluta.
                                    </p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt beatae nemo quaerat, doloribus obcaecati odio!
                                    </p>
                                </div>
                                <div className="comments-list-wrap">
                                    <h3 className="comment-count-title">3 Comments</h3>
                                    <div className="comment-list">
                                        <div className="single-comment-body">
                                            <div className="comment-user-avater">
                                                <img src="assets/img/avaters/avatar1.png" alt="" />
                                            </div>
                                            <div className="comment-text-body">
                                                <h4>Jenny Joe 
                                                    <span className="comment-date">Aprl 26, 2020</span> 
                                                    <Button buttonType={ButtonType.Link}>reply</Button>
                                                </h4>
                                                <p>Nunc risus ex, tempus quis purus ac, tempor consequat ex. Vivamus sem magna, maximus at est id, maximus aliquet nunc. Suspendisse lacinia velit a eros porttitor, in interdum ante faucibus Suspendisse lacinia velit a eros porttitor, in interdum ante faucibus.</p>
                                            </div>
                                            <div className="single-comment-body child">
                                                <div className="comment-user-avater">
                                                    <img src="assets/img/avaters/avatar3.png" alt="" />
                                                </div>
                                                <div className="comment-text-body">
                                                    <h4>Simon Soe 
                                                        <span className="comment-date">Aprl 27, 2020</span>       
                                                        <Button buttonType={ButtonType.Link}>reply</Button>
                                                    </h4>
                                                    <p>Nunc risus ex, tempus quis purus ac, tempor consequat ex. Vivamus sem magna, maximus at est id, maximus aliquet nunc. Suspendisse lacinia velit a eros porttitor, in interdum ante faucibus.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-comment-body">
                                            <div className="comment-user-avater">
                                                <img src="assets/img/avaters/avatar2.png" alt="" />
                                            </div>
                                            <div className="comment-text-body">
                                                <h4>Addy Aoe 
                                                    <span className="comment-date">May 12, 2020</span> 
                                                    <Button buttonType={ButtonType.Link}>reply</Button>
                                                </h4>
                                                <p>Nunc risus ex, tempus quis purus ac, tempor consequat ex. Vivamus sem magna, maximus at est id, maximus aliquet nunc. Suspendisse lacinia velit a eros porttitor, in interdum ante faucibus Suspendisse lacinia velit a eros porttitor, in interdum ante faucibus.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-template">
                                    <h4>Leave a comment</h4>
                                    <p>If you have a comment dont feel hesitate to send us your opinion.</p>
                                    <FormikProvider value={formik}>
                                        <Form onSubmit={handleSubmit}>
                                            <div action="index.html">
                                                <p className='d-flex'>
                                                    <InputBox 
                                                        name="name" 
                                                        type="text" 
                                                        placeholder="Your Name" 
                                                        {...getFieldProps("name")}
                                                        errors={Boolean(errors.name && touched.name)}
                                                        errorMessage={(errors.name && touched.name) && errors.name}
                                                    />
                                                    <InputBox 
                                                        name="email" 
                                                        type="email" 
                                                        placeholder="Your Email" 
                                                        {...getFieldProps("email")}
                                                        errors={Boolean(errors.email && touched.email)}
                                                        errorMessage={(errors.email && touched.email) && errors.email}
                                                    />
                                                </p>
                                                <p>
                                                    <InputBox 
                                                        name="comment" 
                                                        id="comment" 
                                                        placeholder="Your Message" 
                                                        type="textarea"
                                                        {...getFieldProps("comment")}
                                                        errors={Boolean(errors.comment && touched.comment)}
                                                        errorMessage={(errors.comment && touched.comment) && errors.comment} 
                                                    />
                                                </p>
                                                <p>
                                                    <Button buttonType={ButtonType.Primary}>Submit</Button>
                                                </p>
                                            </div>
                                        </Form>
                                    </FormikProvider>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar-section">
                                <div className="recent-posts">
                                    <h4>Recent Posts</h4>
                                    <ul>
                                        <li><Link to="/news">You will vainly look for fruit on it in autumn.</Link></li>
                                        <li><Link to="/news">A man's worth has its season, like tomato.</Link></li>
                                        <li><Link to="/news">Good thoughts bear good fresh juicy fruit.</Link></li>
                                        <li><Link to="/news">Fall in love with the fresh orange</Link></li>
                                        <li><Link to="/news">Why the berries always look delecious</Link></li>
                                    </ul>
                                </div>
                                <div className="archive-posts">
                                    <h4>Archive Posts</h4>
                                    <ul>
                                        <li><Link to="/news">JAN 2019 (5)</Link></li>
                                        <li><Link to="/news">FEB 2019 (3)</Link></li>
                                        <li><Link to="/news">MAY 2019 (4)</Link></li>
                                        <li><Link to="/news">SEP 2019 (4)</Link></li>
                                        <li><Link to="/news">DEC 2019 (3)</Link></li>
                                    </ul>
                                </div>
                                <div className="tag-section">
                                    <h4>Tags</h4>
                                    <ul>
                                        <li><Link to="/news">Apple</Link></li>
                                        <li><Link to="/news">Strawberry</Link></li>
                                        <li><Link to="/news">BErry</Link></li>
                                        <li><Link to="/news">Orange</Link></li>
                                        <li><Link to="/news">Lemon</Link></li>
                                        <li><Link to="/news">Banana</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SingleNews;