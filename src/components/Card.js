const Card = (props) => {
  return (
    <section className="card">
      {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
      <img src={`../images/${props.img}`} alt="" />
      <div className="card--info">
        <div className="card--icon">
          <i className="fa-solid fa-star"></i>
        </div>
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount})・</span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="price">From ${props.price}</span>/ person
      </p>
    </section>
  );
};

export default Card;
