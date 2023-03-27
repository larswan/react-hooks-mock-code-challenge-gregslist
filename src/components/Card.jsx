import { useState, useEffect } from "react"

function Card(post, setPosts, posts){

    useEffect(()=>{
        console.log(posts)
    },[])

    const [star, setStar] = useState(true)
    
    const handleClick = () => {
        setStar(!star)
    }

    const handleDelete= async (post)=>{
        const tempPosts= posts.filter((x)=>{return x.post.image!==post.post.image})
        setPosts(tempPosts)

        
    }

    return(
        <div>
            <li className="card">
                <div className="image">
                    <span className="price">$0</span>
                    <img src={post.post.image} alt={post.post.description} />
                </div>
                <div className="details" onClick={() => { handleClick() }}>
                    {star ? (
                        <button className="emoji-button favorite active">★</button>
                    ) : (
                        <button className="emoji-button favorite">☆</button>
                    )}
                    <strong>{post.post.description}</strong>
                    <span> · {post.post.location}</span>
                    <button className="emoji-button delete" onClick={()=>{handleDelete(post)}}>🗑</button>
                </div>
            </li>
        </div>
    )
}
export default Card