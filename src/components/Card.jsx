import { useState, useEffect } from "react"

function Card({post, setPosts, posts}){

    // useEffect(()=>{
    //     console.log(posts)
    // },[])

    const [star, setStar] = useState(true)
    
    const handleClick = () => {
        setStar(!star)
    }

    const handleDelete= async (post)=>{
        // console.log(posts)

        // setPosts((prev)=>{console.log(prev); return prev})

        const deletePost = async (post) => {
            let req = await fetch(`http://localhost:6001/listings/${post.id}`,
            { method: 'DELETE'}
            )
            let res = await req.json
            console.log(res)
        }
        deletePost(post);

        const tempPosts= posts.filter((x)=>{return x.image!==post.image})
        setPosts(tempPosts)       
    }

    return(
        <div>
            <li className="card">
                <div className="image">
                    <span className="price">$0</span>
                    <img src={post.image} alt={post.description} />
                </div>
                <div className="details" onClick={() => { handleClick() }}>
                    {star ? (
                        <button className="emoji-button favorite active">★</button>
                    ) : (
                        <button className="emoji-button favorite">☆</button>
                    )}
                    <strong>{post.description}</strong>
                    <span> · {post.location}</span>
                    <button className="emoji-button delete" onClick={()=>{handleDelete(post)}}>🗑</button>
                </div>
            </li>
        </div>
    )
}
export default Card