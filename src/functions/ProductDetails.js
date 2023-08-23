import React from 'react';
import {Button, Container} from "react-bootstrap";
import {ArrowRight} from 'react-bootstrap-icons';

function ProductDetails() {

    return (
        <div>

            {/* First Product*/}
            <div>
                <div className=" wrapper product-image-ml">
                    <span className="dot-left left"></span>
                    <img
                        src={require("../img/Cloud_cup/blue_cup.png")}
                        className="d-block w-30 position-absolute top-0 end-0"
                        alt="First slide"
                    />
                </div>


                <Container fluid className="text-left product-text-mr">
                    <p style={{color: "#a2a2a2"}} className="text-small-50 block">FEATURED PRODUCTS </p>
                    <h2 className="text-black"> Coffee Mug and Saucer Set</h2>
                    <hr className="goldline position-absolute top-50 start-50"/>
                    <p className="pt-5 text-black pb-4" style={{fontSize: 17}}>
                        Hareer Luxuries Coffee Mugs Adorable sunflower Saucer-High  <br></br>
                        Quality Cup Coaster for Tea Milk Coffee Espresso Matcha Latte Chai Coco <br></br>
                        designed for your Kitchen  and Coffee Table <br></br>
                        <i>Available in the following colors: Silver, Yellow, Sky Blue, Pink, White</i>
                    </p>
                    <Button
                        variant="outline-dark"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href='https://www.amazon.com/Luxuries-Adorable-Sunflower-Espresso-Designed/dp/B0C5TZFV1G/ref=sr_1_1?crid=19L25518DZQU7&keywords=Hareer%2BLuxuries%2BCoffee%2BMugs%2BAdorable%2BSunflower%2BSaucer%2BCup%2BCoaster%2Bfor%2BTea%2BMilk%2BCoffee%2BEspresso%2BMatcha%2BLatte%2BChai%2BCoco%2BDesigned%2Bfor%2BYour%2BKitchen%2Band%2BCoffee%2BTable&qid=1692740406&sprefix=hareer%2Bluxuries%2Bcoffee%2Bmugs%2Badorable%2Bsunflower%2Bsaucer%2Bcup%2Bcoaster%2Bfor%2Btea%2Bmilk%2Bcoffee%2Bespresso%2Bmatcha%2Blatte%2Bchai%2Bcoco%2Bdesigned%2Bfor%2Byour%2Bkitchen%2Band%2Bcoffee%2Btable%2Caps%2C217&sr=8-1&th=1';
                        }}
                    >Only at $15.99  <ArrowRight size={13}/></Button>

                </Container>
            </div>
            {/* Second Product*/}
            { /* <div>
                <div className="wrapper product-image-ml">
                    <span className="dot-right left"></span>
                    <img
                        src={require("../img/cups.png")}
                        className="d-block w-25 position-absolute offset-7"
                        alt="First slide"
                    />
                </div>


                <Container fluid className="text-left product-text-ml">
                    <p style={{color: "#a2a2a2"}} className="text-small-50 block">FEATURED PRODUCTS </p>
                    <h2 className="text-black"> Tea Cups </h2>
                    <hr className="goldline position-absolute top-50 start-50"/>
                    <p className="pt-5 text-black pb-4" style={{fontSize: 17}}>Many desktop publishing
                        packages and web page editors now use <br></br> Lorem Ipsum as their default model text
                    </p>
                    <Button
                        variant="outline-dark"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href='http://google.com';
                        }}
                    >Only at $90  <ArrowRight size={13}/></Button>
                </Container>
            </div>

            Third Product

            <div>
                <div className="wrapper product-image-ml">
                    <span className="dot-left left"></span>
                    <img
                        src={require("../img/chair2.png")}
                        className="d-block w-30 position-absolute top-0 end-0"
                        alt="First slide"
                    />
                </div>


                <Container fluid className="text-left product-text-mr mb-5">
                    <p style={{color: "#a2a2a2"}} className="text-small-50 block">FEATURED PRODUCTS </p>
                    <h2 className="text-black"> Dinning Chair </h2>
                    <hr className="goldline position-absolute top-50 start-50"/>
                    <p className="pt-5 text-black pb-4" style={{fontSize: 17}}>Many desktop publishing
                        packages and web page editors now use <br></br> Lorem Ipsum as their default model text
                    </p>
                    <Button
                        variant="outline-dark"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href='http://google.com';
                        }}
                    >Only at $90  <ArrowRight size={13}/></Button>
                </Container>
            </div>
            */}

        </div>
    );
}

export default ProductDetails;