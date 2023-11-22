import React, { useEffect, useState } from "react";
import "./movieList.css";
import { useParams } from "react-router-dom";
import Cards from "../card/card";

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const { type } = useParams();

    useEffect(() => {
        getData();
    }, [type]);

    const getData = () => {
        fetch(`http://localhost:3001/movies${type ? type : "/Images"}`)
            .then(res => res.json())
            .then(data => setMovies(data))
            .catch(error => console.error("Error fetching data:", error));
    };
    

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "Images").toUpperCase()}</h2>
            <div className="list__cards">
                {Array.isArray(movies) && movies.map(movie => (
                    <Cards key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
