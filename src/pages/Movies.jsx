import { useSearchParams } from "react-router-dom";
import { MoviesList } from "../components/MoviesList/MoviesList";
import { Searchbar } from "../components/SearchBox/SearchBox";
import { getQuery} from "../Api";
import { useState , useEffect} from "react";
import { Loader } from "../components/Loader";
 
const Movies = () => {
const [query, setQuery] = useState('')
  const [movies, setMovies] = useState()
  const [isLoading, setisLoading] = useState(false)
  // const movies = getMovies();
   const [searchParams, setSearchParams] = useSearchParams();
   const movieName = searchParams.get("query") ?? "";
//  console.log(movieName)
  // const visibleMovies = movies.filter((movie) =>
  //   movie.name.toLowerCase().includes(movieName.toLowerCase())
  // );

  // const updateQueryString = (name) => {
  //   const nextParams = name !== "" ? { name } : {};
  //   setSearchParams(nextParams);
  // };
  const handleOnSubmit = (query) =>
  {
    // console.log(query)
    setQuery(query)
    
    setSearchParams({query})
  
  }

  useEffect(() => {
    if (!query&&!movieName) {
      // console.log("empty q")
      return
    }
     async function fetch() {
       try {
          setisLoading(true)
      // console.log(query)
      const movieQuery = await getQuery(query||movieName);
    //  console.log(query)
      if (!movieQuery) {
        throw new Error(console.log("ooops"))
      }
      
         setMovies(movieQuery)
        //  console.log(movieQuery)
        
    } catch (error) {
      console.log(error)
    } finally {
     setisLoading(false );
    }
     }
    
fetch()
  }, [query,movieName])

// console.log(movies)
  return (
    <main style={{padding:"20px"}}>
      <Searchbar handleOnSubmit={handleOnSubmit} isLoading={isLoading} />
      {isLoading && <Loader  />}
      {movies && <MoviesList movies={movies} />}
      {movies && !movies.length && <div style={{margin:'10px'}}>There is no results! Please try again</div> }
    </main>
  );
};

export default Movies;
