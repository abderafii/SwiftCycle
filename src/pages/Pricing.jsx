import React from 'react';
import { IoMdPricetags, IoMdPeople } from 'react-icons/io';
import { MdPriceCheck, MdLocalOffer, MdLocationOn } from 'react-icons/md';

function Pricing() {
  const pricingPlans = [
    {
      name: "Own Your Ride",
      price: "From €799",
      features: ["One-time payment", "Bundle discounts", "2-year warranty"],
      cta: "Buy Now",
      popular: false
    },
    {
      name: "Subscription",
      price: "€59/month",
      features: ["Maintenance included", "Flexible terms", "Upgrade options"],
      cta: "Subscribe",
      popular: true
    }
  ];

  return (
    <section className="pricing">
      <div className="container">
        <h2>Simple, Flexible Pricing</h2>
        <p className="subtitle">Choose the option that works best for your lifestyle</p>
        
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <div className="pricing-icon">
                {plan.popular ? <MdLocalOffer size={30} /> : <MdPriceCheck size={30} />}
              </div>
              <h3>{plan.name}</h3>
              <p className="price">{plan.price}</p>
              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className={plan.popular ? 'primary' : 'secondary'}>{plan.cta}</button>
            </div>
          ))}
        </div>

        <div className="pricing-extras">
          <div className="extra-card referral-card">
            <div className="extra-icon">
              <IoMdPeople size={40} />
            </div>
            <div className="extra-content">
              <h3>Ride & Refer Program</h3>
              <p>Get €50 for every friend you refer when they purchase a SwiftCycle</p>
              <button className="secondary">Learn More</button>
            </div>
          </div>
          
          <div className="extra-card popup-card">
            <div className="extra-icon">
              <MdLocationOn size={40} />
            </div>
            <div className="extra-content">
              <h3>City Pop-Up Events</h3>
              <p>Test ride a SwiftCycle at one of our upcoming city pop-up locations</p>
              <button className="secondary">Find Events</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
