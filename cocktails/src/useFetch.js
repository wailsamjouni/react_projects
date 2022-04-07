import React, { useState, useEffect } from 'react'

function useFetch(searchTerm) {

    const [cocktailDB, setCocktailDB] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';

    useEffect(() => {
        const fetchMyAPI = async() => {
            setLoading(true);
            await fetch(`${url}${searchTerm}`)
                .then(response => {
                    response.json();
                })
                .then(data => {
                    setCocktailDB(data.drinks);
                    setLoading(false);
                })
                .catch(error => {
                    setError(error);
                })
        }

        fetchMyAPI()
    }, [searchTerm])
    return {
        cocktailDB,
        loading,
        error
    }
}

export default useFetch

// const [cocktailDB, setCocktailDB] = useState([])
// const [loading, setLoading] = useState(true);
// const [searchTerm, setSearchTerm] = useState('');

// const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';
// useEffect(() => {
//     async function fetchMyAPI() {
//         let response = await fetch(url + searchTerm)
//         response = await response.json();
//         console.log(response.drinks)
//         setCocktailDB(response.drinks)
//     }

//     fetchMyAPI()
// }, [searchTerm])



// const fetchMyAPI = useCallback(async () => {
//     setLoading(true)
//     try {
//         const respone = await fetch(`${url}${searchTerm}`)
//         const data = await respone.json()
//         console.log(data)
//         const { drinks } = data
//         if (drinks) {
//             setCocktailDB(drinks)
//         }
//         else {
//             setCocktailDB([])
//         }
//         setLoading(false)
//     }
//     catch (error) {
//         console.log(error)
//         setLoading(false)
//     }
// })

// useEffect(() => {
//     fetchMyAPI()
// }, [searchTerm])