import React from 'react';
import { CiSearch } from "react-icons/ci";
import './styles.scss';
function Search(props) {
    return (
        <div className='search'>
            <div className='search_elementLeft'>Everywhere</div>
            <input className='search_input' placeholder='Search...' />
            <div className="search_icon">
                <i className='search_icon'>
                    <CiSearch color='white' />
                </i>
            </div>

        </div>
    );
}

export default Search;