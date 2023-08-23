import './App.css';
import React, {  useState, useEffect } from 'react';
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import SlideShow from './functions/SlideShow'
import ProductDetails from "./functions/ProductDetails";
import Footer from "./functions/Footer";
import List from "./functions/List";
import SearchBar from "./functions/SearchBar";
import Announcer from "./functions/Announcer";
import {BrowserRouter as Router, useNavigate} from 'react-router-dom';

import posts from "./data.json"
import {TextField} from "@mui/material";
//
// const filterPosts = (posts, query) => {
//     if (!query) {
//         return posts;
//     }
//
//     return posts.filter((post) => {
//         const postName = post.name.toLowerCase();
//         return postName.includes(query);
//     });
// };

function App() {
    // const { search } = window.location;
    // const query = new URLSearchParams(search).get('s');
    // const [searchQuery, setSearchQuery] = useState(query || '');
    // const filteredPosts = filterPosts(posts, searchQuery);

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
        setText(e.target.value);
    };
    const [text, setText] = useState("");
    return (
        <div className="App">
            <div className="box-border">
                <header className="App-header flex">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">

                                    {/*<Router>*/}

                                    {/*    <div className="App">*/}
                                    {/*        <Announcer*/}
                                    {/*            message={`${filteredPosts.length} posts`}*/}
                                    {/*        />*/}
                                    {/*        <SearchBar*/}
                                    {/*            searchQuery={searchQuery}*/}
                                    {/*            setSearchQuery={setSearchQuery}*/}
                                    {/*            filteredPosts={filteredPosts}*/}
                                    {/*        />*/}
                                    {/*    </div>*/}
                                    {/*</Router>*/}
                                    <div className="main">
                                        <div className="left">
                                            <div className="search">
                                                {/*<TextField*/}
                                                {/*    className="pl-3 text-black body-font input-field"*/}
                                                {/*    id="outlined-basic"*/}
                                                {/*    onChange={inputHandler}*/}
                                                {/*    variant="standard"*/}
                                                {/*    placeholder="Search"*/}
                                                {/*    value={inputText}*/}
                                                {/*/>*/}
                                                <input
                                                    autoComplete="off"
                                                    className="pl-3 text-black body-font input-field"
                                                    id="outlined-basic"
                                                    onChange={inputHandler}
                                                    placeholder="Search Products"
                                                    value={inputText}
                                                />
                                            </div>

                                        {inputText && <List input={inputText} />}
                                        </div>
                                        <div className="center">
                                            <a className="navbar-brand justify-content-center text-black" href="/">
                                                <h2 style={{fontSize: 35, fontWeight: 500}}>Hareer</h2></a>
                                        </div>

                                        <Navbar expand="lg" className="right">
                                            <Container fluid>
                                                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                                                <Navbar.Collapse id="basic-navbar-nav">
                                                    <strong>
                                                        <Nav.Link
                                                            className="nav-link text-black hover:text-gold"
                                                            href="/">Home</Nav.Link>
                                                    </strong>
                                                    <Nav className="navbar-nav mr-auto mb-2 mb-lg-0">
                                                        <Dropdown className="mr-2">
                                                            <Dropdown.Toggle
                                                                className="bg-transparent border-gray text-black hover:text-gold"
                                                                id="dropdown-basic">
                                                                <strong>Products</strong>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href="/">Kitchen</Dropdown.Item>
                                                                <Dropdown.Item href="/">Furniture</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </Nav>
                                                </Navbar.Collapse>
                                            </Container>
                                        </Navbar>
                                    </div>


                            </div>
                        </nav>


                            {/*
                            <Router>
                                <Routes>
                                    <Route path="/availableCourses" element={<AvailableCourses />} />
                                    <Route path="/" element={<CreateSchedule />} />
                                </Routes>
                            </Router>
                        */}
                    </div>
                    <div className="App-body">
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
