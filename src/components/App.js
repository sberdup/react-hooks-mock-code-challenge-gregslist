import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(obj => setListings(obj))
  }, [])
  
  function handleDelete(id) {
    fetch(`http://localhost:6001/listings/${id}`,
      {method:'DELETE',
      headers:{'Content-Type': 'application/json'}
      })
      .then(() => console.log(id, ' deleted'))
      setListings([...listings].filter(item => (item.id !== id)))
  }

  let filteredListings = listings.filter(item => {
    if (search === '') return true
    return item.description.toLowerCase().startsWith(search.toLowerCase()) 
  })
  return (
    <div className="app">
      <Header search={search} setSearch={setSearch}/>
      <ListingsContainer listings={filteredListings} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
