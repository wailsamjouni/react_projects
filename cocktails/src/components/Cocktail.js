import React from 'react'
import { Link } from 'react-router-dom'
import './Cocktail.css'

function Cocktail({ idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass, strInstructionsDE }) {
    return (
        <article className='cocktail'>
            <div className="cocktail__imgcontainer">
                <img src={strDrinkThumb} alt={strDrink} />
            </div>
            <div className="cocktail__infos">
                <h3 className='cocktail__name'>{strDrink}</h3>
                <h4 className="cocktail__glass">{strGlass}</h4>
                <p className="cocktail__alcoholic">{strAlcoholic}</p>
                <Link to={`/cocktail/${idDrink}`}>
                    <h3 className="cocktail__details">Details</h3>
                </Link>
            </div>
        </article>
    )
}

export default Cocktail