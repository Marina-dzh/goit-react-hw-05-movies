
import { useEffect, useState } from "react";
import { getMovies } from "../Api";
import { MoviesList } from "../components/MoviesList";
const Home = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
     async function fetchMovies() {
    try {
      const movies = await getMovies();
      // console.log(movies)
      if (!movies) {
        throw new Error(console.log("ooops"))
      }
      
      
      setMovies(movies)
    } catch (error) {
      console.log(error)
      
    } 
  }
fetchMovies()
  }, [])
 

  
    return (
    <main style={{padding:"20px"}} >
      <h1>Trending today:</h1>
{ movies && <MoviesList movies={movies} /> }
    
    </main>
  );
  
 
};

export default Home;