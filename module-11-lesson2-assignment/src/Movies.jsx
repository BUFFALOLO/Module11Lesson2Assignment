
import React, { useState } from "react";

const MoviesList = () => {
const [movies, setMovies] = useState([
        {title: "The Fast and the Furious", year: "2001", director: "Rob Cohen", genre: "Action", synopsis: "An undercover cop infiltrates the world of illegal street racing."},
        {title: "2 Fast 2 Furious", year: "2003", director: "Justin Lin", genre: "Action", synopsis: "Former cop Brian O'Conner teams up with his ex-con friend to work undercover for the FBI."},
        {title: "Fast Five", year: "2011", director: "Justin Lin", genre: "Action", synopsis: "Dominic Toretto and his crew plan a heist in Rio de Janeiro while being pursued by a federal agent."},
        {title: "Step Brothers", year: "2008", director: "Adam McKay", genre: "Comedy", synopsis: "Two middle-aged men become stepbrothers and engage in a series of immature antics."}
    ]);


    const [selectedGenre, setSelectedGenre] = useState("All");
    const [showSynopsis, setShowSynopsis] = useState(null);
    const [showAllMovies, setShowAllMovies] = useState(true);


    const toggleSynopsis = (index) => {
        setShowSynopsis(showSynopsis === index ? null : index);
    };


    const removeMovie = (movieRemoval) => {
        const removeMovie = movies.filter(movie => movie.title !== movieRemoval);
        setMovies(removeMovie);
    };

    const filteredMovies = showAllMovies 
        ? (selectedGenre === "All" ? movies : movies.filter(movie => movie.genre === selectedGenre))
        : movies.filter(movie => movie.genre === "Action");


    const genres = ["All", ...new Set(movies.map(movie => movie.genre))]

    return (
        <div>
            <h2>Part 2:</h2>
            <button 
                style={{marginBottom: '10px', padding: '5px 10px'}}
                onClick={() => setShowAllMovies(!showAllMovies)}
            >
                {showAllMovies ? 'Show Action Movies Only' : 'Show All Movies'}
            </button>

            <div>
                <label htmlFor="genreSelect">Filter by Genre: </label>
                <select
                id="genreSelect"
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                >
                {genres.map((genre, index) => (
                    <option key={index} value={genre}>{genre}</option>
                ))}
                </select>
            </div>

            <ul>
                {filteredMovies.map((movie, index) => (
                    <li key={index}>

                        {/* Toggle button for Movie Description */}
                        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                            <button onClick={() => toggleSynopsis(index)}>
                                <h2>{movie.title}</h2>
                            </button>
                            <button 
                                style={{padding: '5px 10px', backgroundColor: '#ff4444', color: 'white'}}
                                onClick={() => removeMovie(movie.title)}
                            >
                                Remove
                            </button>
                        </div>

                        {showSynopsis === index && (
                            <div>
                                <h3>Directed by {movie.director}</h3>
                                <h5>{movie.year}</h5>
                                <p>
                                    <strong>Genre:</strong> {movie.genre}
                                </p>
                                <p>
                                    <strong>Synopsis:</strong> {movie.synopsis}
                                </p>
                                

                            </div>
                            )}
                    </li>
            ))}
            </ul>
        </div>
    );
};


export default MoviesList;
