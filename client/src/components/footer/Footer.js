import React from 'react';
import { Footer, Col, Container, Row } from 'mdbreact';

const Foot = () => (
            <Footer color="unique-color-dark" className="page-footer font-small pt-0">
                <div style={{backgroundColor: '#6351ce'}}>
                    <Container className="text-left">
                        <Row className="py-4 d-flex align-items-center">
                            <Col md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
                                <h6 className="mb-0 white-text">BRIGHT LIGHTS BASEMENT SOCIAL MEDIA!</h6>
                            </Col>
                            <Col md="6" lg="7" className="text-center text-md-right">
                                <a className="yt-ic"><i className="fa fa-youtube white-text mr-lg-4"> </i></a>
                                <a className="ins-ic"><i className="fa fa-instagram white-text mr-lg-4"> </i></a>
                                <a className="fb-ic ml-0"><i className="fa fa-facebook white-text mr-lg-4"> </i></a>
                                <a className="tw-ic"><i className="fa fa-twitter white-text mr-lg-4"> </i></a>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container className="mt-5 mb-4 text-center text-md-left">
                    <Row className="mt-3">
                        <Col md="3" lg="4" xl="3" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>BRIGHT LIGHTS BASEMENT</strong></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <p> To contact our engineers about booking recording sessions, and to send a request for episode booking, 
                                choose from the following links. </p>
                        </Col>
                        <Col md="4" lg="3" xl="3" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>CONTACT ROGER CAMERO</strong></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <p><i className="fa fa-envelope mr-3"></i> roger@brightlightsbasement.com </p>
                            <p><i className="fa fa-instagram mr-3"></i> HE FAILS ME INSTAGRAM </p>
                            <p><i className="fa fa-spotify mr-3"></i> SPOTIFY AUDIO RESUME </p>
                        </Col>
                        <Col md="4" lg="3" xl="3" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>CONTACT EROL ULUG</strong></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <p><i className="fa fa-envelope mr-3"></i> erol@brightlightsbasement.com </p>
                            <p><i className="fa fa-instagram mr-3"></i> EROL "ROLLIE" ULUG INSTAGRAM </p>
                            <p><i className="fa fa-spotify mr-3"></i> SPOTIFY AUDIO RESUME </p>
                        </Col>
                        <Col md="4" lg="3" xl="3" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>CONTACT BRIGHT LIGHTS BASEMENT</strong></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <p><i className="fa fa-envelope mr-3"></i> contact@brightlightsbasement.com</p>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.brightlightsbasement.com"> BRIGHT LIGHTS BASEMENT </a>
                    </Container>
                </div>
            </Footer>
        )

export default Foot

