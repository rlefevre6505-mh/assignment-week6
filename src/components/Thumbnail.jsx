export default function Thumbnail({ src, alt, onClick, onKeyDown }) {
  return (
    <img
      className="thumbnail-image"
      tabIndex={0}
      src={src}
      alt={alt}
      onClick={onClick}
      onKeyDown={onKeyDown}
    ></img>
  );
}
