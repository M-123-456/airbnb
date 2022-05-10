const Contact = ({ img, name, phone, email, feedbacks }) => {
  return (
    <div className="contact-card">
      <img src={img} alt="" />
      <h3 className="contact--name">{name}</h3>
      <div className="info-group">
        <i className="fa-solid fa-phone"></i>
        {phone}
      </div>
      <div className="info-group">
        <i className="fa-solid fa-envelope"></i>
        {email}
      </div>
    </div>
  );
};

export default Contact;
