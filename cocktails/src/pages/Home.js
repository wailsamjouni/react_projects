import React, { useState, useEffect, useCallback } from 'react'
import CocktailList from '../components/CocktailList'
import Search from '../components/Search'

function Home() {

    const [cocktailDB, setCocktailDB] = useState([])
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('a');

    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    useEffect(() => {
        setLoading(true);
        async function fetchMyAPI() {
            let response = await fetch(`${url}${searchTerm}`)
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
    }, [searchTerm])




    return (
        <main>
            <Search setSearchTerm={setSearchTerm} />
            <CocktailList cocktailDB={cocktailDB} loading={loading} searchTerm={searchTerm} />
        </main>
    )
}

export default Home