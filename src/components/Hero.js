import image1 from ".././images/image1.jpg";
import image2 from ".././images/image2.jpg";
import image3 from ".././images/image3.jpg";
import image4 from ".././images/image4.jpg";
import image5 from ".././images/image5.jpg";
import image6 from ".././images/image6.jpg";
import image7 from ".././images/image7.jpg";
import image8 from ".././images/image8.jpg";
import image9 from ".././images/image9.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero--pictures">
        <img src={image2} className="image1" />
        <img src={image1} className="image2" />
        <img src={image3} className="image3" />
        <img src={image4} className="image4" />
        <img src={image5} className="image5" />
        <img src={image6} className="image6" />
        <img src={image7} className="image7" />
        <img src={image8} className="image8" />
        <img src={image9} className="image9" />
      </div>
      <div className="hero--messages">
        <h1 className="hero--headline">Online Experiences</h1>
        <h3 className="hero--p">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </h3>
      </div>
    </section>
  );
};

export default Hero;
