import MovieCard from "../components/MovieCard"
import { useState } from "react";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id:1, title: "John Wick 1", release_date: "2020"},
        {id:2, title: "Noah Wick 2", release_date: "2021"},
        {id:3, title: "Kevin Wick 3", release_date: "2022"},
        {id:4, title: "John Wick 4", release_date: "2023"}
    ];

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery);
    };

    return (
        <div className="Home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for movies..." 
                    className="search-input" 
                    val={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )
}

export default Home;