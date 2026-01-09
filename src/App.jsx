import { useState, useEffect } from "react";
import "./App.css";
import Thumbnail from "./components/Thumbnail";
import PlaceholderImage from "./components/PlaceHolderImage";
// import Header from "./components/Header";

//dont just code in app.jsx, always use components!
//start with wireframe and build from a UI first approach

function App() {
  //STATES
  //
  //image handling states:
  const [thumbs, setThumbs] = useState([]);
  const [bigImage, setBigImage] = useState(0);
  //
  //search functionality states:
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredImages, setFilteredImages] = useState([thumbs]);

  //EFFECTS
  //
  //generate random number for pages worth of photos from API
  function RandomPage() {
    let num = Math.floor(Math.random() * 100);
    return num;
  }

  //fetch API data
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?client_id=${
          import.meta.env.VITE_ACCESS_KEY
        }&query=puppy&&page=${RandomPage()}&&per_page=30&&orientation=landscape`
      );
      const data = await response.json();
      setThumbs(data.results);
    }
    fetchData();
  }, []);

  //filter thumbs dynamically based on search input
  useEffect(() => {
    setFilteredImages(filteredImages);
  }, [filteredImages, searchQuery]);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const result = thumbs.filter((thumb) =>
      thumb.alt_description.toLowerCase().includes(query)
    );
    setFilteredImages(result);
    console.log("query triggered");
  }, [searchQuery, thumbs]);

  //clear search
  const clearSearch = () => {
    setSearchQuery("");
  };

  // window.addEventListener("keydown", (event) => {
  //   let currentID = bigImage.props.id;
  //   // console.log(currentID);
  //   let nextImages = thumbs.map((image) => {
  //     return (
  //       <img
  //         src={image.urls.regular}
  //         alt={image.alt_description}
  //         key={image.id + "fullscreen"}
  //         id={currentID + 1}
  //       ></img>
  //     );
  //   });
  //   console.log(nextImages);
  //   if (event.key === "ArrowRight" && currentID != 30) {
  //     let nextImage = nextImages[currentID];
  //     console.log(nextImage);
  //     setBigImage([]);
  //     setBigImage(nextImage);
  //     console.log(bigImage);
  //   } else if (event.key === "ArrowLeft") {
  //     let nextImage = (bigImage - 1 + thumbs.length) % thumbs.length;
  //     setBigImage(nextImage);
  //   } else {
  //     null;
  //   }
  // });

  //FUNCTIONS
  // when user clicks an image - update state
  // when user presses button that should switch image
  // when user enters search field

  return (
    <div className="body">
      <header>
        <h1>Daily Dose of Dogs</h1>
        <div className="search-div">
          <input
            type="text"
            className="search-bar"
            placeholder="search for key words"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="reset-button" onClick={clearSearch}>
            Clear search
          </button>
        </div>
      </header>
      <div className="thumbnail-container">
        {thumbs.map((thumb, index) => {
          return (
            <Thumbnail
              src={thumb.urls.thumb}
              // lgsrc={thumb.urls.regular}
              alt={thumb.alt_description}
              key={thumb.id}
              id={index}
              onClick={() => {
                setBigImage(index);
                console.log(thumb.alt_description);
              }}
            />
          );
        })}
      </div>
      <div className="fullscreen-div">
        {thumbs.length > 0 ? (
          <img
            src={thumbs[bigImage].urls.regular}
            alt={thumbs[bigImage].alt_description}
            key={thumbs[bigImage].id + "fullscreen"}
            id={thumbs[bigImage].index}
          ></img>
        ) : (
          <PlaceholderImage />
        )}
      </div>
    </div>
  );
}

export default App;
