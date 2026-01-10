export default function Thumbnail({ src, alt, id, onClick, onKeyDown }) {
  return (
    <img
      className="thumbnail-image"
      tabIndex={0}
      src={src}
      alt={alt}
      id={id}
      onClick={onClick}
      onKeyDown={onKeyDown}
    ></img>
  );
}
