import { useParams } from "react-router-dom";
import { getRev } from "../Api";
import { useEffect, useState } from "react";
import { Loader } from "../components/Loader";
import { RevCont, Name } from "./Review.styled";
const Reviews = () => {
const { id } = useParams();
  // console.log("rev", id)
  

   
  const [rev, setRev] = useState();
 const [isLoading, setisLoading] = useState(false)
  useEffect(() => {
     async function fetch() {
       try {
       setisLoading(true)
      const revID = await getRev(id);
     
      if (!revID) {
        throw new Error(console.log("ooops"))
      }
      
      setRev(revID)
    } catch (error) {
      console.log(error)
    } finally {
     setisLoading(false );
    }
     }
    
fetch()
  }, [id])


  // console.log(rev)
  return (
    <section>
       {isLoading && <Loader  />}
       {rev&&!rev.length && <p>Sorry, we don't have reviews for this film</p>}
      {rev && <ul>{rev.map(item => (
        <RevItem key={item.id} item={item} />))}</ul>}
     
    </section>
  );
};

const RevItem = ({ item }) => {
  return(<div>
    {item && <RevCont>
      <Name>{item.author}</Name>
      <div style={{fontSize:'12px'}}>{ item.updated_at.slice(0, 10)}</div>
      <p>"{ item.content}"</p>

    </RevCont> }
 </div> )

}

export default Reviews;