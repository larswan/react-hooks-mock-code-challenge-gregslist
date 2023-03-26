function ListingCard({posts}) {
 
  
  return (
    posts.map((post)=>{
        
        return(
          <li className="card">
            <div className="image">
              <span className="price">$0</span>
              <img src={post.image} alt={"description"} />
            </div>
            <div className="details">
              {true ? (
                <button className="emoji-button favorite active">★</button>
              ) : (
                <button className="emoji-button favorite">☆</button>
              )}
              <strong>{"description"}</strong>
              <span> · {"location"}</span>
              <button className="emoji-button delete">🗑</button>
            </div>
          </li>
        )
      }
    )
  )
 }


export default ListingCard;
