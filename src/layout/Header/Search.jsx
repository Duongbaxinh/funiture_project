import React from 'react';
import { CiSearch } from "react-icons/ci";
import CardSearch from '../../components/smaler/CardSearch/CardSearch';
import { useNavigate } from 'react-router-dom'
import { PageContextState } from '../../context/PageContext';
import './styles.scss';

function Search({ setIsSearch }) {
    const { dataProduct, handleChange } = PageContextState()
    const navigate = useNavigate()
    return (
        <div className='search'>
            <div className='search_elementLeft'>Everywhere</div>
            <input className='search_input' placeholder='Search...' onChange={handleChange} onBlur={
                () => {
                    setTimeout(() => setIsSearch(false), 200)
                }
            } />
            <div className="search_icon">
                <i className='search_icon' onClick={() => {
                    return navigate('/search')
                }}>
                    <CiSearch color='white' />
                </i>
            </div>
            {dataProduct.length > 0 && <div className="search_suggestion">
                {dataProduct.map((product) => (
                    <CardSearch product={product} setIsSearch={setIsSearch} />
                ))}
            </div>}

        </div>
    );
}

export default Search;