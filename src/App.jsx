import { useState, useEffect } from "react";
import "./App.css";
import Thumbnail from "./components/Thumbnail";
import PlaceholderImage from "./components/PlaceHolderImage";

function App() {
  //STATES
  //
  //image handling states:
  const [thumbs, setThumbs] = useState([]);
  const [bigImage, setBigImage] = useState(0);
  //
  //search functionality state:
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredThumbs, setFilteredThumbs] = useState([]);

  //EFFECTS
  //
  //generate random number for pages worth of photos from API
  function RandomPage() {
    let num = Math.floor(Math.random() * 99);
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
    setFilteredThumbs(filteredThumbs);
  }, [filteredThumbs]);

  //TODO: implement debounce?
  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const result = thumbs.filter((thumb) =>
      thumb.alt_description.toLowerCase().includes(query)
    );
    setFilteredThumbs(result);
    console.log(result);
  }, [searchQuery, thumbs]);

  //clear search
  const clearSearch = () => {
    setSearchQuery("");
    setFilteredThumbs([]);
  };

  //TODO: when user presses button that should switch image
  //This should be refactored into stand-alone functions with callbacks for onClick and onKeyDown
  //
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

  return (
    <div className="body">
      <header>
        <h1>Daily Dose of Dogs</h1>
        <div className="search-div">
          <label htmlFor="search-bar">Search</label>
          <input
            type="text"
            name="search-bar"
            className="search-bar"
            placeholder="type key words to search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="reset-button" onClick={clearSearch}>
            Clear search
          </button>
        </div>
      </header>
      <div className="thumbnail-container">
        {filteredThumbs.length < 1
          ? // THIS CODE BLOCK (THE ORIGINAL FUNCTION FOR MAPPING THROUGH MY THUMBNAILS) IS REDUNDANT SINCE IMPLEMENTING SEARCH FUNCTIONALITY, AND NOW DOES NOTHING
            thumbs.map((thumb, index) => {
              return (
                <Thumbnail
                  src={thumb.urls.thumb}
                  alt={thumb.alt_description}
                  key={thumb.id}
                  id={index}
                  onClick={() => {
                    setBigImage(index);
                    // console.log(thumb.alt_description);
                  }}
                  onKeyDown={(event) => {
                    event.key === "Enter" || event.key === " "
                      ? setBigImage(index)
                      : null;
                  }}
                />
              );
            })
          : filteredThumbs.map((filteredThumb, index) => {
              return (
                <Thumbnail
                  src={filteredThumb.urls.thumb}
                  alt={filteredThumb.alt_description}
                  key={index}
                  id={index}
                  onClick={() => {
                    setBigImage(index);
                    console.log(filteredThumb.alt_description);
                  }}
                  onKeyDown={(event) => {
                    event.key === "Enter" || event.key === " "
                      ? setBigImage(index)
                      : null;
                  }}
                />
              );
            })}
      </div>
      <div className="fullscreen-div">
        {filteredThumbs.length > 0 ? (
          <img
            src={filteredThumbs[bigImage].urls.regular}
            alt={filteredThumbs[bigImage].alt_description}
            key={filteredThumbs[bigImage].id + "ddod"}
            id={filteredThumbs[bigImage].index}
          ></img>
        ) : (
          <PlaceholderImage />
          // <img
          //   src={filteredThumbs[bigImage].urls.regular}
          //   alt={filteredThumbs[bigImage].alt_description}
          //   key={filteredThumbs[bigImage].id + "ddod"}
          //   id={filteredThumbs[bigImage].index}
          // ></img>
        )}
      </div>
    </div>
  );
}

export default App;
