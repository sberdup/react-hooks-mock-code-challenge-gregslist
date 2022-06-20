import React, {useState} from "react";

function ListingCard({item: {description, image, location, id}, handleDelete}) {
  const [fav, setFav] = useState(false)
  function handleFav(){
    setFav(!fav)
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image || "https://via.placeholder.com/300x300"} alt={description} />
      </div>
      <div className="details">
        {fav ? (
          <button className="emoji-button favorite active" onClick={handleFav}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFav}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => handleDelete(id)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
