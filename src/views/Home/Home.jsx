import React, { useEffect, useState } from 'react'
import './home.scss'
import { MovieService } from '../../api/MovieService'
import MovieCard from '../../components/MovieCard/MovieCard'


const Home = ({ searchValueProp }) => {

    const [movie, setMovie] = useState([])

    async function getMovies() {
        const { data: {results} } = await MovieService.getMovies()
        
        setMovie(results)
    }

    async function getMoviesSearch(movieString) {
        const { data: { results } } = await MovieService.searchMovies(movieString)

        setMovie(results)
    }

    useEffect(() => {
        getMovies()
    }, [])

    useEffect(() => {
        if (searchValueProp) {
            getMoviesSearch(searchValueProp)
        }
        
        if (searchValueProp === "") {
            getMovies()
        }
    }, [searchValueProp])

    return (
        <section className='Home'>
            { movie.map((movie) => (
                <div key={ movie.id }>
                    <MovieCard movieProp={movie} />
                </div>
            )) }
        </section>
    )
}

export default Home