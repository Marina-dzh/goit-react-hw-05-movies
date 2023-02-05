import { useParams } from "react-router-dom";
import { getCast } from "../Api";
import { useEffect, useState } from "react";
import { Loader } from "../components/Loader";
import {CasSt} from "./Cast.styled" ;
const Cast = () => {
const { id } = useParams();
  // console.log('cast', id)
  
  const [cast, setCast] = useState();
const [isLoading, setisLoading] = useState(false)
  useEffect(() => {
     async function fetch() {
    try {
      const castID = await getCast(id);
      setisLoading(true)
      if (!castID) {
        throw new Error(console.log("ooops"))
      }
      let unicCastID = []
      let unicCast = []
      // console.log(castID.id)
    
      castID.forEach(item => {
        // console.log(item)
        if (!unicCastID.includes(item.id)) {
          unicCastID.push(item.id)
          if (unicCastID.includes(item.id)) {
            unicCast.push(item)
          }
        }
        
      });

      setCast(unicCast)
    } catch (error) {
      console.log(error)
    } finally {
     setisLoading(false );
    }
     }
    
fetch()
  }, [id])
  // console.log(cast)
  return (
    <section>
      {isLoading && <Loader  />}
      {cast && <ul>{cast.map(item => (
        <CastItem key={item.id} item={item} />))}</ul> }
      {cast && !cast.length && <p>Sorry, we don't have casts information for this film</p>}
    </section>
  );
};

export default Cast;

const CastItem = ({ item }) => {
  return(<CasSt>
{item.profile_path && <img src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} alt="" loading="lazy"
      width="120px"
      height="180px" />}
    <div style={{display:'block', margin:'10px'}}>
    <p style={{textDecoration:"underline"}}>{item.name}</p>
    <p><span style={{color:"gray"}}>Character: </span>{ item.character}</p></div>
 </CasSt> )

}