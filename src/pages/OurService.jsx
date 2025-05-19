import { IoMdSpeedometer } from "react-icons/io";
import { GiElectric } from "react-icons/gi";
import {
  FaMobileAlt,
  FaLock,
  FaShieldAlt,
  FaWrench,
  FaRoute,
} from "react-icons/fa";
import { MdOutlineDevicesFold, MdColorLens } from "react-icons/md";

const OurService = () => {
  const augmentedFeatures = [
    {
      icon: <FaShieldAlt size={40} />,
      title: "2-Year Warranty",
      description:
        "Comprehensive coverage for peace of mind on your investment",
    },
    {
      icon: <FaWrench size={40} />,
      title: "Maintenance Plans",
      description: "Free first tune-up + optional maintenance packages",
    },
    {
      icon: <FaMobileAlt size={40} />,
      title: "SwiftCycle App",
      description: "Route planning, battery status, and ride analytics",
    },
    {
      icon: <FaRoute size={40} />,
      title: "Smart Navigation",
      description: "Optimized routes based on battery level and traffic",
    },
  ];

  const features = [
    {
      icon: <MdOutlineDevicesFold size={40} />,
      title: "10-Second Fold",
      description: "Ultra-portable design folds small for easy storage",
    },
    {
      icon: <GiElectric size={40} />,
      title: "40km Range",
      description: "Battery-assisted pedaling for longer commutes",
    },
    {
      icon: <FaMobileAlt size={40} />,
      title: "Smart App",
      description: "GPS tracking and lock system via smartphone",
    },
    {
      icon: <MdColorLens size={40} />,
      title: "3 Colors",
      description: "Sleek designs to match your style",
    },
  ];

  return (
    <>
      <section className="features">
        <div className="container">
          <h2>Urban Mobility Reimagined</h2>
          <p className="subtitle">
            Stylish, lightweight, foldable electric bikes designed for city
            living
          </p>

          <div className="feature-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="product-details">
        <div className="container">
          <div className="details-content">
            <div className="details-text">
              <h2>Engineered for Urban Commuters</h2>
              <ul>
                <li>
                  <IoMdSpeedometer /> Lightweight aluminum frame (folds in 10
                  seconds)
                </li>
                <li>
                  <GiElectric /> Battery-assisted pedaling (up to 40 km/charge)
                </li>
                <li>
                  <FaMobileAlt /> Built-in USB charger and app-connected lock
                  system
                </li>
                <li>
                  <FaLock /> Integrated GPS tracker for security
                </li>
              </ul>
            </div>
            <div className="details-image">
              <img
                src="https://thumbs.dreamstime.com/b/young-man-riding-bike-urban-area-enjoying-sunny-lifestyle-young-man-confidently-rides-his-bike-along-modern-street-376455685.jpg"
                alt="SwiftCycle Bike"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="augmented-product">
        <div className="container">
          <h2>Beyond the Bike</h2>
          <p className="subtitle">
            Our complete ecosystem enhances your riding experience
          </p>

          <div className="augmented-grid">
            {augmentedFeatures.map((feature, index) => (
              <div key={index} className="augmented-card">
                <div className="augmented-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="app-showcase">
            <div className="app-content">
              <h3>SwiftCycle Mobile App</h3>
              <ul className="app-features">
                <li>Maintenance reminders and service history</li>
                <li>Battery status and range prediction</li>
                <li>Free first tune-up and optional maintenance plans</li>
                <li>Integrated route planning</li>
              </ul>
              <div className="app-badges">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on App Store"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                />
              </div>
            </div>
            <div className="app-preview">
              <img
                src="https://c02.purpledshub.com/uploads/sites/39/2024/07/best-cycling-apps.jpg?w=1200"
                alt="Cycling app on smartphone"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurService;
