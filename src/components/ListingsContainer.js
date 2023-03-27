import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard.jsx";

function ListingsContainer() {
  const [posts, setPosts] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(()=>{
      fetch("http://localhost:6001/listings")
      .then(req=>req.json())
      .then(res => {setIsLoaded(true); setPosts(res);
        //  console.log(res) 
        })
      }, [])

  // return statements
  {

    if(posts && isLoaded) {
      return (
        <main>
          <ul className="cards">
            <ListingCard posts={posts} setPosts={setPosts} />
          </ul>
        </main>
      )
      
    }
    else{
      return (
        <div>Loading...</div>
      )
    }
  }
}

export default ListingsContainer;
