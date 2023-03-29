import {React, useState, useEffect } from "react";
import ListingCard from "./ListingCard.jsx";

function ListingsContainer({search}) {
  const [posts, setPosts] = useState([])
  const [displayPosts, setDisplayPosts] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(()=>{
    // console.log("listing container")
    // console.log(posts[1].description)

    let tempPosts = posts.filter((x)=>{return x.description.includes(`${search}`)})
    console.log(tempPosts)

    tempPosts.length>0 ? setPosts(tempPosts) : setDisplayPosts(posts)

  },[search])

  useEffect(()=>{
      fetch("http://localhost:6001/listings")
      .then(req=>req.json())
      .then(res => {setIsLoaded(true); setPosts(res); setDisplayPosts(res);
        //  console.log(res) 
        })
      }, [])
  {
    if(posts && isLoaded) {
      return (
        <main>
          <ul className="cards">
            <ListingCard posts={displayPosts} setPosts={setDisplayPosts} />
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
