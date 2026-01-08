export default function Thumbnail({ key, src, alt }) {
  return <img className="thumbnail" key={key} src={src} alt={alt}></img>;
}
