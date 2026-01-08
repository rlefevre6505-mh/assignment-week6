export default function Thumbnail({ src, alt, onClick }) {
  return (
    <img
      className="thumbnail"
      src={src}
      // bigsrc={bigsrc}
      alt={alt}
      onClick={onClick}
    ></img>
  );
}
