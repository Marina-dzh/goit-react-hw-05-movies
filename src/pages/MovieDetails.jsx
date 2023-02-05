import { useParams, useLocation } from "react-router-dom";
import { BackLink } from "../components/BackLink";
import { MovieCard } from "components/MovieCard";
import { getMoviesID } from "../Api";
import { useEffect, useState } from "react";
import { useRef } from "react";

const MovieDetails = () => {
  const { id } = useParams();
  // console.log(id)
  
  
  
const [movie, setMovie] = useState();

  useEffect(() => {
     async function fetch() {
       try {
      // console.log(id)
      const movieByID = await getMoviesID(id);
    //  console.log(movieByID)
      if (!movieByID) {
        throw new Error(console.log("ooops"))
      }
      
      setMovie(movieByID)
    } catch (error) {
      console.log(error)
      
    } 
  }
fetch()
  }, [id])

const dataReleaseCheck = value =>
  `${!value ? 'Unknown' : `${value.slice(0, 4)}`}`;
  // console.log(movie)
  const location = useLocation();
  const locRef = useRef(location.state?.from ?? "/movies")
  // const backLinkHref = location.state?.from ?? "/movies";

  const movieGenres = genres => genres.map(({ name }) => name).join(', ');
  return (
    <main style={{ padding: "20px" }}>
      {movie && <div><BackLink to={locRef.current}>Back to movies</BackLink>
      <MovieCard movie={movie} genre={movieGenres} data={ dataReleaseCheck} /></div>}
    </main>
  );
};

export default MovieDetails;
