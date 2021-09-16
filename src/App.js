import React from "react";
import "./App.css";
import SearchPhotos from "./searchPhotos"

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">React Photo Search</h1>
         <p>Using Unsplash API</p>
        <SearchPhotos />

      </div>
    </div>
  );
}
export default App;


