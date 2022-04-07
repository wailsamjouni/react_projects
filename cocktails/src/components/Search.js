import React, { useEffect, useRef } from 'react'
import './Search.css'

function Search({ setSearchTerm }) {

    const inputRef = useRef('');

    useEffect(() => {
        inputRef.current.focus();
    })

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const searchItems = () => {
        setSearchTerm(inputRef.current.value)
    }

    return (
        <div className='search'>
            <form onSubmit={handleSubmit}>
                <div className="search__wrapper">
                    <h2 className="search__title">
                        Search Your Favorite Cocktail
                    </h2>
                    <input
                        type="" className="search__input"
                        placeholder='Mojito ?'
                        ref={inputRef}
                        onChange={searchItems}
                    />
                </div>
            </form>
        </div>
    )
}

export default Search