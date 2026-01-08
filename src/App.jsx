import { useState, useEffect } from "react";
import "./App.css";
import Thumbnail from "./components/Thumbnail";
import PlaceholderImage from "./components/PlaceHolderImage";

//dont just code in app.jsx, always use components!
//start with wireframe and build from a UI first approach

function App() {
  const [thumbs, setThumbs] = useState([]);
  const [bigImage, setBigImage] = useState([
    <PlaceholderImage key="PlaceholderImage" />,
  ]);

  //EFFECTS

  function RandomPage() {
    let num = Math.floor(Math.random() * 30);
    return num;
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?client_id=${
          import.meta.env.VITE_ACCESS_KEY
        }&query=puppy&&page=${RandomPage()}&&per_page=30&&orientation=landscape`
      );
      const data = await response.json();
      setThumbs(data.results);
      console.log(data);
    }
    fetchData();
  }, []);

  //FUNCTIONS
  // when user clicks an image - update state
  //when user presses button that should switch image
  //when user enters search field

  return (
    <div className="body">
      <h1>Image Gallery</h1>
      <div className="thumbnail-container">
        {thumbs.map((thumb, index) => {
          return (
            <Thumbnail
              src={thumb.urls.thumb}
              alt={thumb.alt_description}
              key={thumb.id}
              id={index}
              onClick={() => {
                setBigImage(
                  <img
                    src={thumb.urls.raw}
                    alt={thumb.alt_description}
                    key={thumb.id + "fullscreen"}
                    id={index}
                  ></img>
                );
                console.log(bigImage);
              }}
            />
          );
        })}
      </div>
      <div className="fullscreen-div">{bigImage}</div>
    </div>
  );
}

export default App;
