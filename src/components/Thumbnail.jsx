export default function Thumbnail({ src, alt, onClick }) {
  return (
    <button className="thumbnail-button" onClick={onClick}>
      <img className="thumbnail-image" src={src} alt={alt}></img>
    </button>
  );
}
