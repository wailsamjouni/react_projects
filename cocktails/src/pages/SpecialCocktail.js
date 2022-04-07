import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import './SpecialCocktail.css'

function SpecialCocktail() {

    const { id } = useParams();
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
    const [cocktailDB, setCocktailDB] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        async function fetchMyAPI() {
            let response = await fetch(`${url}${id}`)
            response = await response.json()
            console.log(response.drinks)
            if (response.drinks) {
                setCocktailDB(response.drinks)
            }
            else {
                setCocktailDB([])
            }
            setLoading(false);
        }
        const timer = setTimeout(() => {
            fetchMyAPI();
        }, 500)

        return () => {
            clearTimeout(timer);
        }
    }, [id])

    if (loading) {
        return <Loading />
    }

    if (!cocktailDB) {
        return <h1>No cocktail found</h1>
    }
    else {
        const {
            strDrinkThumb: imgUrl,
            strDrink: name,
            strCategory: categorie,
            strAlcoholic: infos,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1: ing1,
            strIngredient2: ing2,
            strIngredient3: ing3,
            strIngredient4: ing4,
            strIngredient5: ing5
        } = cocktailDB[0]
        const cocktailIngredients = [
            ing1,
            ing2,
            ing3,
            ing4,
            ing5
        ]
    }

    const {
        strDrinkThumb: imgUrl,
        strDrink: name,
        strCategory: categorie,
        strAlcoholic: infos,
        strGlass: glass,
        strInstructions: instructions,
        strIngredient1: ing1,
        strIngredient2: ing2,
        strIngredient3: ing3,
        strIngredient4: ing4,
        strIngredient5: ing5
    } = cocktailDB[0]
    const cocktailIngredients = [
        ing1,
        ing2,
        ing3,
        ing4,
        ing5
    ]

    return (
        <div className='special'>
            <div className="wrapper">
                <div className="special__left">
                    <img className='special__img' src={imgUrl} alt="" />
                </div>
                <div className="special__right">
                    <h2 className="special__title">{name}</h2>
                    <p className='special__name'>
                        <span className='special__label'>Name </span>
                        {categorie}
                    </p>
                    <p className='special__name'>
                        <span className='special__label'>Info </span>
                        {infos}
                    </p>
                    <p className='special__name'>
                        <span className='special__label'>Glass </span>
                        {glass}
                    </p>
                    <p className='special__name'>
                        <span className='special__label'>Instructions </span>
                        {instructions}
                    </p>
                    <p className='special__name'>
                        <span className='special__label'>Ingredients </span>
                        {cocktailIngredients.map((ingredient, index) => {
                            return ingredient && <span key={index} className='special__ ingredient'> {ingredient}</span>
                        })}
                    </p>
                </div>
            </div>
            <Link to={'/'}>
                <button className='button'>Back Home</button>
            </Link>

        </div>
    )
}

export default SpecialCocktail