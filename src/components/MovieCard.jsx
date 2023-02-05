
import { Loader } from "./Loader";
import {  Suspense } from "react";
import {  Link, Outlet } from "react-router-dom";

import { Bor, Img, H2 } from "./MovieCard.styled";
export const MovieCard = (props) => {
  const { movie, genre, data } = props
  
    return (
 <div>
      <Img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" loading="lazy"
      width="290px"
      height="400px"/>
      <div>
        <H2 >
        {movie.title} ({data(
        movie.release_date
      )})
          </H2>
          
          {movie.vote_average!==0 && <Bor style={{textAlign:"center"}}> User Score: {Math.round(movie.vote_average * 10)}%</Bor>}
          <h3 style={{ marginBottom:'0'}}>Overview:</h3>
          <Bor>{movie.overview}</Bor>
          <h4 style={{ marginBottom:'0'}}>Genres:</h4>
          <Bor>{genre(movie.genres)}</Bor>
          <div>
            <h4>Additional information:</h4>
             <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
              </li>
            </ul>
            <Suspense fallback={<Loader  />}>
        <Outlet />
      </Suspense>
          </div>
        </div></div>)
      

}