import Thumbnail from "./Thumbnail";

export default function ThumbContainer() {
  return (
    <div className="thumbnail-container">
      {thumbs.map((thumb, index) => {
        return (
          <Thumbnail
            src={thumb.urls.thumb}
            lgsrc={thumb.urls.regular}
            alt={thumb.alt_description}
            key={thumb.id}
            id={index}
            onClick={() => {
              setBigImage(index);
              console.log(index);
            }}
          />
        );
      })}
    </div>
  );
}
