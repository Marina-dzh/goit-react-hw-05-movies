

import axios from 'axios';


 const KEY= `ade16ccb99a7efabe4d5368f2610c9a0`;
axios.defaults.baseURL = `https://api.themoviedb.org/3/`;
      
export const getMovies = async () => {
    // console.log(query, page)
    const responce = await axios.get(`trending/movie/day?api_key=${KEY}`);
   
    return responce.data.results
//     if (responce.data.hits.length > 0 )
//     { return responce.data } else {

//         toast.error('There is no results!')
//    }
}

export const getMoviesID = async (id) => {
    // console.log(id)
    const responce =await axios.get(`movie/${id}?api_key=${KEY}`);
    
    // console.log (responce)
    return responce.data
    
}

export const getQuery= async (searchQuery) => {
    const responce = await axios.get(`search/movie?api_key=${KEY}&query=${searchQuery}`);
    // console.log (responce.data.results)
    

     return (responce.data.results)

//     if (responce.data.results.length > 0 )
//     { return responce.data.results } else {

//      return toast.error('There is no results!')
        
//    }
}

export const getCast = async (id) => {
    // console.log(id)
    const responce =await axios.get(`movie/${id}/credits?api_key=${KEY}`);
    //  console.log (responce.data.cast)
    return responce.data.cast
    
}
export const getRev = async (id) => {
    // console.log(id)
    const responce =await axios.get(`movie/${id}/reviews?api_key=${KEY}`);
    //  console.log (responce.data.results)
    return responce.data.results
    
}