import React, { useState } from "react";
import "./index.css"; 

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Why should I book with Travel Unbounded in Bangalore?",
      answer: "We offer exclusive packages, expert travel advice, and unbeatable customer support to make your trip unforgettable."
    },
    {
      question: "Does Travel Unbounded provide international tour packages?",
      answer: "Yes! We offer international tour packages covering destinations worldwide, from Europe to Asia and beyond."
    },
    {
      question: "Can I customize my travel itinerary?",
      answer: "Absolutely! We specialize in personalized travel itineraries tailored to your preferences and budget."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions (FAQs)</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <span className="toggle-icon">{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
