import Carousel from 'react-bootstrap/Carousel';
import {Container} from "react-bootstrap";
import React from 'react';

function SlideShow() {
    return (
        <div>
            <Carousel controls={false} time={1000}>
                <Carousel.Item className="slider-margin">
                    <img
                        src={require("../img/Cloud_cup/pink_cup.png")}
                        className="d-block w-30 offset-7"
                        alt="First slide"
                    />
                    <div className="rotate side-text left">
                        <h1 style={{fontSize: 200, color:"#e4e7eb"}} className="left">MUGS</h1>
                    </div>
                    <Carousel.Caption>
                        <Container fluid>
                            <span className="text-gold text-small-55 block text-left">COFFEE MUG <br></br>WITH SAUCER SET</span>
                            <h2 className="text-black text-left" style={{fontSize: 55}}>Welcome to <br></br> Hareer
                                Home Decor</h2>
                            <hr className="goldline position-absolute bottom-0 start-0"/>
                            <p className="pt-5 text-black text-left" style={{fontSize: 17}}>Hareer Luxuries Coffee Mugs Adorable sunflower Saucer-High  <br></br>
                                Quality Cup Coaster for Tea Milk Coffee Espresso Matcha Latte Chai Coco <br></br>
                                designed for your Kitchen  and Coffee Table (Pink)
                            </p>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="slider-margin">
                    <img
                        src={require("../img/Cloud_cup/blue_cup.png")}
                        className="d-block w-30 offset-7"
                        alt="First slide"
                    />
                    <div className="rotate side-text left">
                        <h1 style={{fontSize: 200, color:"#e4e7eb"}} className="left">MUGS</h1>
                    </div>
                    <Carousel.Caption>
                        <Container fluid>
                            <span className="text-gold text-small-55 block text-left">COFFEE MUG <br></br>WITH SAUCER SET</span>
                            <h2 className="text-black text-left" style={{fontSize: 55}}>Welcome to <br></br> Hareer
                                Home Decor</h2>
                            <hr className="goldline position-absolute bottom-0 start-0"/>
                            <p className="pt-5 text-black text-left" style={{fontSize: 17}}>Hareer Luxuries Coffee Mugs Adorable sunflower Saucer-High  <br></br>
                                Quality Cup Coaster for Tea Milk Coffee Espresso Matcha Latte Chai Coco <br></br>
                                designed for your Kitchen  and Coffee Table (Sky Blue)
                            </p>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="slider-margin">
                    <img
                        src={require("../img/Cloud_cup/yellow_cup.png")}
                        className="d-block w-30 offset-7"
                        alt="First slide"
                    />

                    <div className="rotate side-text left">
                        <h1 style={{fontSize: 200, color:"#e4e7eb"}} className="left">MUGS</h1>
                    </div>
                    <Carousel.Caption>
                        <Container fluid>
                            <span className="text-gold text-small-55 block text-left">COFFEE MUG <br></br>WITH SAUCER SET</span>
                            <h2 className="text-black text-left" style={{fontSize: 55}}>Welcome to <br></br> Hareer
                                Home Decor</h2>
                            <hr className="goldline position-absolute bottom-0 start-0"/>
                            <p className="pt-5 text-black text-left" style={{fontSize: 17}}>Hareer Luxuries Coffee Mugs Adorable sunflower Saucer-High  <br></br>
                                Quality Cup Coaster for Tea Milk Coffee Espresso Matcha Latte Chai Coco <br></br>
                                designed for your Kitchen  and Coffee Table (Yellow)
                            </p>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="slider-margin">
                    <img
                        src={require("../img/Cloud_cup/white_cup.png")}
                        className="d-block w-30 offset-7"
                        alt="First slide"
                    />

                    <div className="rotate side-text left">
                        <h1 style={{fontSize: 200, color:"#e4e7eb"}} className="left">MUGS</h1>
                    </div>
                    <Carousel.Caption>
                        <Container fluid>
                            <span className="text-gold text-small-55 block text-left">COFFEE MUG <br></br>WITH SAUCER SET</span>
                            <h2 className="text-black text-left" style={{fontSize: 55}}>Welcome to <br></br> Hareer
                                Home Decor</h2>
                            <hr className="goldline position-absolute bottom-0 start-0"/>
                            <p className="pt-5 text-black text-left" style={{fontSize: 17}}>Hareer Luxuries Coffee Mugs Adorable sunflower Saucer-High  <br></br>
                                Quality Cup Coaster for Tea Milk Coffee Espresso Matcha Latte Chai Coco <br></br>
                                designed for your Kitchen  and Coffee Table (White)
                            </p>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="slider-margin">
                    <img
                        src={require("../img/Cloud_cup/silver_cup.png")}
                        className="d-block w-30 offset-7"
                        alt="First slide"
                    />

                    <div className="rotate side-text left">
                        <h1 style={{fontSize: 200, color:"#e4e7eb"}} className="left">MUGS</h1>
                    </div>
                    <Carousel.Caption>
                        <Container fluid>
                            <span className="text-gold text-small-55 block text-left">COFFEE MUG <br></br>WITH SAUCER SET</span>
                            <h2 className="text-black text-left" style={{fontSize: 55}}>Welcome to <br></br> Hareer
                                Home Decor</h2>
                            <hr className="goldline position-absolute bottom-0 start-0"/>
                            <p className="pt-5 text-black text-left" style={{fontSize: 17}}>Hareer Luxuries Coffee Mugs Adorable sunflower Saucer-High  <br></br>
                                Quality Cup Coaster for Tea Milk Coffee Espresso Matcha Latte Chai Coco <br></br>
                                designed for your Kitchen  and Coffee Table (Silver)
                            </p>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>

    );
}

export default SlideShow;