import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, my name is <span className="purple">Mohd Sameer </span>
            from <span className="purple"> Kanpur, India</span>.
            <br />
            I am a Software Developer. Currently working at Reshita since February 2024, I specialize in developing and optimizing user interfaces using ReactJS, Redux, and TailwindCSS for large-scale projects. I have integrated features like Razorpay subscriptions and WhatsApp for seamless payments and communication. My focus is on crafting intuitive experiences, ensuring performance, and adhering to best practices to deliver efficient, scalable solutions.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              🏄 Surfing
            </li>
            <li className="about-activity">
              🥾 Trekking
            </li>
            <li className="about-activity">
              🌏 Travelling
            </li>
          </ul>

          <p style={{ color: "#a4e7ff" }}>
            "Always focus on learning new things."{" "}
          </p>
          <footer className="blockquote-footer">Mohd Sameer</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
