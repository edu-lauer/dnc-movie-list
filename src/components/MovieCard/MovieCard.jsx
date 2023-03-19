import React from 'react'
import { Link } from 'react-router-dom'
import './movieCard.scss'


const MovieCard = ({ movieProp }) => {
    return (
        <div className='MovieCard'>
            <div className='movie-image'>
            <img src={`https://image.tmdb.org/t/p/w1280${movieProp.poster_path}`} alt={movieProp.title}></img>
            </div>

            <div className='movie-description'>
                <h3>{''}</h3>
                <Link to={`/movie/${movieProp.id}`} className='btn-details'>Ver Detalhes</Link>
            </div>
        </div>
        
    )
}

export default MovieCard