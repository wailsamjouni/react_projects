import Cocktail from './Cocktail';
import './CocktailList.css'
import Loading from './Loading';

function CocktailList({ cocktailDB, loading, searchTerm, error }) {

    if (cocktailDB.length === 0) {
        return (
            <h2 className="cocktaillist__nodrink">
                Sorry! no Cocktails matched your search criteria
            </h2>
        );
    }

    if (loading) {
        return <Loading />
    }

    return (
        <section className='cocktaillist'>
            <h2 className="cocktaillist__title">Cocktails <span className='cocktaillist__span'>.</span></h2>
            <div className="cocktaillist__wrapper">
                {

                    cocktailDB.map(cocktail => {
                        return <Cocktail key={cocktail.idDrink} {...cocktail} />
                    })

                }
            </div>
        </section>
    )
}

export default CocktailList