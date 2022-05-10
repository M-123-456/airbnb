import Card from "./components/Card";
// import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./data.js";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    );
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="card-lists">{cards}</section>

      {/* <Contact
        img={profile1}
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
        isCollegue={true}
        feedbacks={{ likes: 100, dislikes: 50 }}
      />
      <Contact
        img={profile2}
        name="Ms. Dadda"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        img={profile3}
        name="Mr. Watson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        img={profile4}
        name="Mr. Blabla"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      /> */}
    </div>
  );
}

export default App;
