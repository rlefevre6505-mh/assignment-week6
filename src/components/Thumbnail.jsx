export default function Thumbnail({ src, alt, onClick }) {
  return (
    <button className="thumbnail-button" onClick={onClick}>
      <span>
        <img className="thumbnail-image" src={src} alt={alt} />
      </span>
    </button>
  );
}
