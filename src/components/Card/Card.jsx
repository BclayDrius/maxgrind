import "./Card.scss";

function Card({ link, img, name }) {
  return (
    <a className="quick-link" href={link}>
      <img src={img} alt="" />
      <div className="quick-link-text">{name}</div>
    </a>
  );
}
export default Card;
