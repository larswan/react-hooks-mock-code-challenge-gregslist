import Card from "./Card.jsx"
import { useEffect } from "react"

function ListingCard({posts, setPosts}) {
  
  // useEffect(() => {
  //   console.log(posts)
  // }, [posts])
  
  return (
    posts.map((post)=>{
        return(
          <Card post={post} posts={posts} setPosts={setPosts} />
        )
      }
    )
  )
 }

export default ListingCard;