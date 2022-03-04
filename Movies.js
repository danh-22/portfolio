import {useState} from 'react'
import movieData from './data/movie-data.json'
const Movies = (props) => {
const [movieSearch, setMovieSearch] = useState("")
const [data, setData] = useState(movieData)
const [displayGenre, setDisplayGenre] = useState(false)

const filterGenre = (e) => {
    setData(movieData.filter((item)=> {
        return item.genre.includes(e.target.value)
    }))
}

return (
    <>
    <div id="movie-search">
        <input onChange={(e)=> setMovieSearch(e.target.value.toUpperCase())} type="search" placeholder='Search movie'></input>   
        <button onClick={()=> setDisplayGenre(true)} className="genre-btn" type="button">Genre <i style={{fontSize: "12px", color: "rgb(17, 87, 128)"}} className="bi bi-caret-down-square-fill"></i></button>
        {displayGenre &&
        <div id='genre-list'>
        <button onClick={()=> setData(movieData)} className="genre-btn" type="button" value="sci-fi">All</button>                
        <button onClick={filterGenre} className="genre-btn" type="button" value="crime">Crime</button>
        <button onClick={filterGenre} className="genre-btn" type="button" value="drama">Drama</button>    
        <button onClick={filterGenre} className="genre-btn" type="button" value="action">Action</button>    
        <button onClick={filterGenre} className="genre-btn" type="button" value="western">Western</button>    
        <button onClick={filterGenre} className="genre-btn" type="button" value="comedy">Comedy</button>
        <button onClick={filterGenre} className="genre-btn" type="button" value="sci-fi">Sci-Fi</button>
        </div>}     
    </div>        
    
    
    <section className='movies custom-container'>
    {data.filter((item)=> {
        return item.movie.toUpperCase().indexOf(movieSearch) > -1
    })
    .map((movie)=> {
        return(
            <div id="movies" key={movie.id}>
                <h1>{movie.movie}</h1>
                <img width="200px" src={movie.poster} alt={movie.movie}></img>
                <p>{movie.description}</p>
                <h4>{movie.genre + " "}</h4>
                <h4>{movie.release_year}</h4>
            </div>
        )
    })
    }    

    </section>

    </>
    )
    
}

export default Movies