import {Search} from "react-bootstrap-icons";
import { useNavigate } from 'react-router-dom';
import {useState} from "react";
import React from "react";
import posts from "../data.json"
import { BrowserRouter as Router } from 'react-router-dom';


const SearchBar = ({ searchQuery, setSearchQuery, filteredPosts }) => {

    const history = useNavigate();
    const [text, setText] = useState("");

    const onSubmit = (e) => {
        history(`?s=${searchQuery}`);
        setText(e.target.value);
        e.preventDefault();
    };

    const Text = () => <ul>

            {filteredPosts.map((post) => (
                <li  key={post.id}><a className="text-gold" href={post.link}>{post.name} <br></br></a></li>
            ))}

    </ul>;

    return (
        <div>
            <form
                action="/"
                method="get"
                autoComplete="off"
                onSubmit={onSubmit}
            >
                <label htmlFor="header-search">
                <span className="visually-hidden">
                    Search Products
                </span>
                </label>
                <input
                    className="pl-3 text-black body-font input-field"
                    value={searchQuery}
                    onInput={(e) => setSearchQuery(e.target.value)}
                    type="text"
                    id="header-search"
                    placeholder="Search Products"
                    name="s"
                />

                <button type="submit" className="icon-button"><i><Search className="icon-margin" size={15}/></i></button>
                {searchQuery &&  <Text />}

            </form>
        </div>

    );
};

export default SearchBar;
