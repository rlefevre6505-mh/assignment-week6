import { useState, useEffect } from "react";
import "./App.css";
import Thumbnail from "./components/Thumbnail";
//dont just code in app.jsx, always use components!
//start with wireframe and build from a UI first approach

function App() {
  // variable to store api image data
  const [thumbs, setThumbs] = useState([]);
  // variable to store current image
  // const [image, setImage] = useState([]);

  //EFFECTS
  // fetch api data and put fetched api data in state
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://week-6-api.vercel.app/api/images");
      const data = await response.json();
      console.log(data);
      setThumbs(data);
      console.log(data[0].title);
    }
    fetchData();
  }, []);

  //FUNCTIONS
  // when user clicks an image - update state
  //when user presses button that should switch image
  //when user enters search field

  return (
    <div>
      <h1>Image Gallery</h1>
      <div className="thumbnail-container">
        {thumbs.map((thumb) => {
          <Thumbnail key={thumb.id} src={thumb.url} alt={thumb.alt} />;
          console.log(thumb.alt);
        })}
      </div>
      <div className="fullscreen-div">main image (or a modal)</div>
    </div>
  );
}

export default App;
