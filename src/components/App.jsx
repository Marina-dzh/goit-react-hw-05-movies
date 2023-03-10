import { lazy } from "react"
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";

const Home = lazy(() => import("../pages/Home"));
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const Movies = lazy(() => import("../pages/Movies.jsx"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));


export const App = () => {
  return (
    <Routes >
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />}/>
        <Route path="movies/:id" element={<MovieDetails /> } >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
     
        
      </Route>
       <Route path="*" element={<Home />} />
    </Routes>
  );
};
