import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, handleDelete}) {
  return (
    <main>
      <ul className="cards">
        {listings.map(item => (
          <ListingCard item={item} key={item.id} handleDelete={handleDelete} />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
