import React, { useState } from "react";

import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  accessKey: "P68afyGqAaZKMs9DFKgHW0uAoiI0qAWdTvPgYFTz6Fc",
});


export default function SearchPhotos() {
  console.log('hiSug');
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);
  const searchPhotos = async (e) => {
    e.preventDefault();
   

    unsplash.search
    .photos(query, 5, 15)
    .then(toJson)
    .then((json) => {
      setPics(json.results);
   });

  };

  return (
    <>
      <form className="form" onSubmit={searchPhotos}>
        <label className="label" htmlFor="query">
          {" "}
         
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Search Here`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Go
        </button>
      </form>
      <div className="card-list">
      {pics.map((pic) => <div className="card" key={pic.id}>
          
      <img
                className="card--image"
                alt={pic.alt_description}
                src={pic.urls.full}
                width="100%"
                height="100%"
              ></img> 

      </div>) }
      </div>
    </>
  );
}
