import { FaMedal, FaTools, FaCalendarAlt, FaBicycle, FaLeaf, FaTrophy } from 'react-icons/fa';

const SwiftClubPage = () => {
  const benefits = [
    {
      icon: <FaMedal size={50} />,
      title: "Loyalty Rewards",
      description: "Earn points for every ride that can be redeemed for accessories, maintenance, or discounts on future purchases."
    },
    {
      icon: <FaTools size={50} />,
      title: "Maintenance Perks",
      description: "Exclusive discounts on tune-ups, priority service scheduling, and free annual safety inspections."
    },
    {
      icon: <FaCalendarAlt size={50} />,
      title: "Early Access",
      description: "Be the first to know about and purchase new models before they're available to the general public."
    },
    {
      icon: <FaBicycle size={50} />,
      title: "Group Rides",
      description: "Invitations to exclusive SwiftCycle tours through scenic urban routes with fellow members."
    },
    {
      icon: <FaLeaf size={50} />,
      title: "Eco-Rider Meetups",
      description: "Connect with other environmentally-conscious riders at our regular sustainability events."
    },
    {
      icon: <FaTrophy size={50} />,
      title: "In-App Challenges",
      description: "Compete in monthly riding challenges with prizes for top performers in different categories."
    }
  ];

  const upcomingEvents = [
    {
      date: "June 15, 2025",
      title: "Downtown Sunset Ride",
      description: "Join us for an evening tour through the city center ending with drinks at a local eco-cafe."
    },
    {
      date: "July 8, 2025",
      title: "Maintenance Workshop",
      description: "Learn basic bike maintenance skills from our certified technicians."
    },
    {
      date: "August 20, 2025",
      title: "Annual Eco-Rider Festival",
      description: "Celebrate sustainable transportation with live music, food, and group rides."
    }
  ];

  return (
    <div className="swift-club-page">
      {/* Hero Section */}
      <section className="club-hero">
        <div className="container">
          <h1>Swift Club</h1>
          <p className="subtitle" style={{color: 'white'}}>Exclusive benefits for our most dedicated riders</p>
          <button className="cta-button">Join the Club</button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <h2>Member Benefits</h2>
          <p className="section-description">Your loyalty deserves recognition. Enjoy these exclusive perks as a Swift Club member.</p>
          
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-section">
        <div className="container">
          <h2>Upcoming Events</h2>
          <p className="section-description">Connect with fellow Swift Club members at these exclusive gatherings.</p>
          
          <div className="events-timeline">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="event-card">
                <div className="event-date">{event.date}</div>
                <div className="event-content">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <button className="event-button">RSVP</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Join?</h2>
          <p>Current SwiftCycle owners can activate their Swift Club membership through our mobile app.</p>
          <div className="cta-buttons">
            <button className="primary">Download the App</button>
            <button className="secondary">Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SwiftClubPage;