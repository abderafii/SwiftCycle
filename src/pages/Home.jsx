
function Home() {
  return (
    <section className="hero">
      <div className="container">
        <h1>SwiftCycle</h1>
        <h1>Fold. Ride. Repeat.</h1>
        <p className="tagline">Stylish, lightweight, foldable electric bikes designed for urban commuters</p>
        <div className="cta-buttons">
          <button className="primary"><a style={{ textDecoration: 'none', color: "white" }}  href="/our-service">Explore Our Services</a></button>
          <button className="secondary">Book a Test Ride</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
