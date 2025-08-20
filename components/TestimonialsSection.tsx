import React from 'react';
import './TestimonialsSection.css'; // Importing CSS for styling

const testimonials = [
  {
    name: "Sophia L.",
    feedback: "GlamCS products transformed my skincare routine! Absolutely luxurious.",
    image: "/images/testimonial1.jpg"
  },
  {
    name: "Olivia R.",
    feedback: "The quality is unmatched. I feel glamorous every day!",
    image: "/images/testimonial2.jpg"
  },
  {
    name: "Emma W.",
    feedback: "Finally, a brand that understands luxury and effectiveness.",
    image: "/images/testimonial3.jpg"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonials-section">
      <h2 className="section-title">What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <h3 className="testimonial-name">- {testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;