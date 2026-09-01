import "./card.css";

const Card = (props) => {
  return (
    <div className="card" style={{ backgroundColor: props.bgcolor }}>
      <img src={props.Image} className="heros"></img>
      <h2>{props.Title}</h2>
      <p>{props.Description}</p>
      <h3>{props.Price}</h3>
    </div>
  );
};

export default Card;
