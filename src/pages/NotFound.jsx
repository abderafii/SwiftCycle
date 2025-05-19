import { FaBicycle, FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="error-content">
          <div className="error-icon">
            <FaExclamationTriangle size={80} />
          </div>
          <h1>404 - Page Not Found</h1>
          <p className="error-message">
            Oops! The page you're looking for has pedaled away.
          </p>
          <div className="bicycle-animation">
            <FaBicycle className="bicycle" size={60} />
            <div className="road"></div>
          </div>
          <p className="suggestion">
            Let's get you back on track. Try one of these routes instead:
          </p>
          <div className="navigation-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/our-service" className="nav-link">Our Services</Link>
            <Link to="/swift-club" className="nav-link">Swift Club</Link>
            <Link to="/contact-us" className="nav-link">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
