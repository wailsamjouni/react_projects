import React from 'react'
import { Link } from 'react-router-dom'
import './Cocktail.css'

function Cocktail({ idDrink, strDrink, strCategory, strDrinkThumb, strAlcoholic, strGlass, strInstructionsDE }) {
    return (
        <article className='cocktail'>
            <div className="cocktail__wrapper">
                <div className="cocktail__imgcontainer">
                    <img src={strDrinkThumb} alt={strDrink} />
                </div>
                <div className="cocktail__infos">
                    <h3 className='cocktail__name'>Name: {strDrink}</h3>
                    <h4 className="cocktail__glass">Glass: {strGlass}</h4>
                    <h4 className="cocktail__glass1">Category: {strCategory}</h4>
                    <h5 className="cocktail__alcoholic">{strAlcoholic}</h5>
                    <Link to={`/cocktail/${idDrink}`}>
                        <h3 className="cocktail__details">Details</h3>
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default Cocktail