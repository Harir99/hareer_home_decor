import React from 'react';
import {TelephoneFill} from 'react-bootstrap-icons';
import {Link} from 'react-bootstrap-icons';
import {Col, Row} from "react-bootstrap";
function Footer() {
    return (
        <div className="pt-5">
            {/*gray thin line */}
             <hr className="hr-or"/>
            <footer className="nb-footer">
                <div className="container">
                    <div className="row pt-3">
                        <div className="footer-info-single">
                            {/*<h2 className="title">About</h2>
                            <p><em>Sample HTML page with Twitter's Bootstrap. Code example of Easy Sticky
                                Footer using HTML, Javascript, jQuery, and CSS. This bootstrap tutorial
                                covers all the major elements of responsive.</em></p>*/}
                        </div>
                        {/*<Row>*/}
                        {/*    <Col>*/}
                                <div className="col-lg-11">
                                    <div className="footer-info-single">
                                        {/*<h2 className="title">Contact Us</h2>*/}
                                        <ul className="list-unstyled">
                                            <Row>
                                                <Col>
                                                    <li><i><TelephoneFill/></i> &nbsp; +1.913.263.9072</li>
                                                </Col>
                                                <Col>
                                                    <li><i><Link/></i>  &nbsp; hareerhomedecor@gmail.com</li>
                                                </Col>
                                            </Row>

                                        </ul>
                                    </div>
                                </div>
                            {/*</Col>*/}
                            {/*<Col className="mr-5 mt-5 pt-3 pl-5">*/}
                            {/*    <div  className="col-lg-12">*/}
                            {/*        <div className="container">*/}
                            {/*            <div className="row">*/}
                            {/*                <div className="col-sm-12">*/}
                            {/*                    <a className="navbar-brand justify-content-center text-black" href="/">*/}
                            {/*                        <h2 style={{fontSize: 35, fontWeight: 500}}>Hareer</h2></a>*/}
                            {/*                    <p className="justify-content-center">Copyright © 2017. Your Company.</p>*/}
                            {/*                </div>*/}
                            {/*                <div className="col-sm-6"></div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</Col>*/}
                            {/*<Col>*/}
                            {/*    <div className="col-lg-12">*/}
                            {/*        <div className="footer-info-single">*/}
                            {/*            <h2 className="title">About</h2>*/}
                            {/*            <p>Sample HTML page with Twitter's Bootstrap. Code example of Easy Sticky*/}
                            {/*                Footer using HTML, Javascript, jQuery, and CSS. This bootstrap tutorial*/}
                            {/*                covers all the major elements of responsive</p>*/}

                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</Col>*/}
                        {/*</Row>*/}

                    </div>



                </div>

                <section className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <p>&copy;  2023, Hareer Home Decor, Inc. </p>
                            </div>
                            <div className="col-sm-6"></div>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    );
}

export default Footer;