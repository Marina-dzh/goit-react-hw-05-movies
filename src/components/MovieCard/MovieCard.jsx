
import { Loader } from "../Loader";
import {  Suspense } from "react";
import {  Link, Outlet } from "react-router-dom";

import { Bor, Img, H2 } from "./MovieCard.styled";
export const MovieCard = (props) => {
  const { movie, genre, data } = props
  const {poster_path, title,release_date,vote_average, overview, genres}= movie
    return (
 <div>
      {poster_path&&<Img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" loading="lazy"
      width="290px"
      height="420px"/>}
      <div>
        <H2 >
        {title} ({data(
        release_date
      )})
          </H2>
          
          {vote_average!==0 && <Bor style={{textAlign:"center"}}> User Score: {Math.round(movie.vote_average * 10)}%</Bor>}
          <h3 style={{ marginBottom:'0'}}>Overview:</h3>
          <Bor>{overview}</Bor>
          <h4 style={{ marginBottom:'0'}}>Genres:</h4>
          <Bor>{genre(genres)}</Bor>
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