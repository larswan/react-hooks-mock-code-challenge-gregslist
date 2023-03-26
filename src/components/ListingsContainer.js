import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [posts, setPosts] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(()=>{
      fetch("http://localhost:6001/listings")
      .then(req=>req.json())
      .then(res => {setIsLoaded(true); setPosts(res); console.log(posts) })
      }, [])

  // return statements
  {

    // return(
    //   <div>
    //     <ListingCard posts={posts} />
    //   </div>
    // )
    if(!isLoaded) {
      return (
        <div>Loading...</div>
      )
    }
    else{
      setIsLoaded(false)
      return (
        <main>
          <ul className="cards">
            <ListingCard posts={posts} />
          </ul>
        </main>
      )
    }
  }
}

export default ListingsContainer;
