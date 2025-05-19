import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

function Home() {
  return (
    <section className="hero">
      <div className="container">
        <h1>SwiftCycle</h1>
        <h1>Fold. Ride. Repeat.</h1>
        <p className="tagline">
          Stylish, lightweight, foldable electric bikes designed for urban
          commuters
        </p>
        <div className="cta-buttons">
          <Typography component={Link} to={`/our-service`}>
            {" "}
            <button className="primary">Explore Our Services</button>
          </Typography>

          <button className="secondary">Book a Test Ride</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
