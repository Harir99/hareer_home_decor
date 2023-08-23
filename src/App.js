import './App.css';
import React, {  useState } from 'react';
// import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import SlideShow from './functions/SlideShow'
import ProductDetails from "./functions/ProductDetails";
import Footer from "./functions/Footer";
import List from "./functions/List";

function App() {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    return (
        <div className="App">
            <div className="box-border">
                <header className="App-header flex">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                    <div className="main">
                                        <div className="left">

                                            <div className="searchBar">
                                                <input
                                                    autoComplete="off"
                                                    style={{width: "15vw"}}
                                                    className="pl-3 text-black body-font input-field large"
                                                    id="outlined-basic"
                                                    onChange={inputHandler}
                                                    placeholder="Search Products"
                                                    value={inputText}
                                                />
                                                <input
                                                    autoComplete="off"
                                                    style={{width: "15vw"}}
                                                    className="pl-3 text-black body-font input-field small"
                                                    id="outlined-basic"
                                                    onChange={inputHandler}
                                                    placeholder="Search"
                                                    value={inputText}
                                                />
                                            </div>


                                        {inputText && <List input={inputText} />}
                                        </div>
                                        <div className="center">
                                            <a className="navbar-brand justify-content-center text-black" href="/">
                                                <h2 style={{fontSize: "150%"}}>Hareer</h2></a>
                                        </div>

                                        {/*<Navbar expand="lg" className="right">*/}
                                        {/*    <Container fluid>*/}
                                        {/*        <Navbar.Toggle aria-controls="basic-navbar-nav"/>*/}
                                        {/*        <Navbar.Collapse id="basic-navbar-nav">*/}
                                        {/*            <strong>*/}
                                        {/*                <Nav.Link*/}
                                        {/*                    className="nav-link text-black hover:text-gold"*/}
                                        {/*                    href="/">Home</Nav.Link>*/}
                                        {/*            </strong>*/}
                                        {/*            <Nav className="navbar-nav mr-auto mb-2 mb-lg-0">*/}
                                        {/*                <Dropdown className="mr-2">*/}
                                        {/*                    <Dropdown.Toggle*/}
                                        {/*                        className="bg-transparent border-gray text-black hover:text-gold"*/}
                                        {/*                        id="dropdown-basic">*/}
                                        {/*                        <strong>Products</strong>*/}
                                        {/*                    </Dropdown.Toggle>*/}

                                        {/*                    <Dropdown.Menu>*/}
                                        {/*                        <Dropdown.Item href="/">Kitchen</Dropdown.Item>*/}
                                        {/*                        <Dropdown.Item href="/">Furniture</Dropdown.Item>*/}
                                        {/*                    </Dropdown.Menu>*/}
                                        {/*                </Dropdown>*/}
                                        {/*            </Nav>*/}
                                        {/*        </Navbar.Collapse>*/}
                                        {/*    </Container>*/}
                                        {/*</Navbar>*/}
                                    </div>


                            </div>
                        </nav>
                    </div>
                    <div className="App-body pt-3">
                        <SlideShow/>
                    </div>
                </header>

            </div>
            <div className="App-body">
                <ProductDetails />

            </div>
            <Footer />
        </div>
    );
}

export default App;
