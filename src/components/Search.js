import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';


import './Search.css'

import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';

import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer';

function Search({ value, hideButtons = false }) {

    const [state, dispatch] = useStateValue();

    const [input, setInput] = useState("");
    const history = useHistory();

    const search = e => {
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        if (input.length > 0) {
            history.push("/search");
        }
    }

    useEffect(() => {
        setInput(value);
    }, [])

    const handleChange = e => {
        setInput(e.target.value);
    }

    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input onChange={handleChange} value={input} type="text" />
                <MicIcon className="search__inputIcon" />
            </div>
            <div className="search__buttons">
                <Button className={hideButtons ? "search_buttonsHidden" : ""} type="submit" onClick={search} variant="outlined">Google Search</Button>
                <Button className={hideButtons ? "search_buttonsHidden" : ""} variant="outlined">I'm Feeling Lucky</Button>
            </div>

        </form>
    )
}

export default Search;
