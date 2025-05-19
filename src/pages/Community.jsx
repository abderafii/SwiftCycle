import { FaUsers, FaRoute, FaHeart } from "react-icons/fa";

function Community() {
  const testimonials = [
    {
      quote:
        "SwiftCycle cut my commute time in half! I arrive fresh and stress-free.",
      author: "Maria S., Graphic Designer",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=60&fit=facearea&facepad=3",
    },
    {
      quote:
        "The folding feature is a game-changer for my small apartment and office.",
      author: "James L., Software Engineer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=60&fit=facearea&facepad=3",
    },
    {
      quote:
        "Best investment I've made for getting around the city. So much fun to ride!",
      author: "Priya K., Marketing Consultant",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=60&fit=facearea&facepad=3",
    },
  ];

  const communityFeatures = [
    {
      icon: <FaUsers size={40} />,
      title: "Swift Club",
      description: "Loyalty rewards for long-term riders",
    },
    {
      icon: <FaRoute size={40} />,
      title: "Group Rides",
      description: "Join our monthly city tours and meetups",
    },
    {
      icon: <FaHeart size={40} />,
      title: "Eco Community",
      description: "Connect with other sustainable commuters",
    },
  ];

  return (
    <>
      <section className="community">
        <div className="container">
          <h2>More Than Just a Bike</h2>
          <p className="subtitle">Join a movement of urban riders</p>

          <div className="community-grid">
            {communityFeatures.map((feature, index) => (
              <div key={index} className="community-card">
                <div className="community-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="testimonials">
        <div className="container">
          <h2>What Our Riders Say</h2>
          <div className="testimonial-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="user-avatar"
                  />
                  <div>
                    <p className="quote">"{testimonial.quote}"</p>
                    <p className="author">- {testimonial.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Community;
