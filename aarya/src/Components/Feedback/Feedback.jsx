import React from "react";
import "./Feedback.css";
import bimala from "../../assets/bimala.svg";
import sangita from "../../assets/sangita.svg";
import sabu from "../../assets/sabu.svg";
import gita from "../../assets/gita.svg"; // Add more images as needed

const Feedback = () => {
  // Testimonial data array
  const testimonials = [
    {
      id: 1,
      name: "Bimala Thapa",
      role: "Organic Farm Owner, Morang",
      image: bimala,
      quote:
        "I've used many fertilizers over the years, but Black Diamond gave the best results. My tomatoes are healthier, and I no longer worry about harmful chemicals. Highly recommended for every serious farmer!",
    },
    {
      id: 2,
      name: "Sangita Bohora",
      role: "Business woman, Jhapa",
      image: sangita,
      quote:
        "Switching to Black Diamond has been one of the best decisions for my farm. It's 100% organic, improves soil quality, and gives great yield without harming nature.",
    },
    {
      id: 3,
      name: "Sabina Adhikari",
      role: "Horticulturist, Jhapa",
      image: sabu,
      quote:
        "The results speak for themselves - 30% higher yield in just one season! Black Diamond's bio-fertilizer has transformed my farming practice completely.",
    },
    {
      id: 4,
      name: "Gita Raut",
      role: "House-wife, pesicola,kathamndu",
      image: gita,
      quote:
        "Since I started using Black Diamond, my kitchen garden has flourished. The vegetables are greener, fresher, and chemical-free—just what my family needs.",
    },
    // Add more testimonials as needed
  ];

  // Duplicate testimonials for seamless looping
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div id="feedback" className="response">
      <div className="feedback-header">
        <h1>What Our Customers Say</h1>
      </div>

      <div className="feedbacks-container">
        <div className="feedbacks auto-scroll">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div className="feedback-card" key={`${testimonial.id}-${index}`}>
              <div className="feedback-image">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}, ${testimonial.role}`}
                />
              </div>
              <div className="card-content">
                <div className="customer-info">
                  <h3 className="customer-name">{testimonial.name}</h3>
                  <p>{testimonial.role}</p>
                </div>
                <p className="product-description">"{testimonial.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
