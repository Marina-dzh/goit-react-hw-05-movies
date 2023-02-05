import { Link, useLocation } from "react-router-dom";
import { Container, CardWrapper, Name } from "./MoviesList.styled";

export const MoviesList = ( {movies} ) => {
  const location = useLocation();
  // console.log(location)
  // const locRef = useRef(location.state?.from ?? "/movies")
  // console.log(locRef)
// console.log(movies)
  return (
    <Container>
      {movies.map(({id, title, poster_path}) => (
        <CardWrapper key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }} style={{width:"100%",height :'100%'}}>
            <figure style={{ objectFit: "cover", margin: '0' }}>
              
              {poster_path && <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" loading="lazy"
                style={{ width: '100%' }} />}
            {!poster_path && <img src="https://via.placeholder.com/198x295?text=No+Image" alt="" style={{ width: '100%' }} /> }</figure>
            <Name>{title}</Name>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};