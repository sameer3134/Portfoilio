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
            I'm a junior developer. I am pursuing my Bachelors from HBTU, Kanpur (2020-2024). My current GPA is 7.62 out of 10. My end goal is to become a Full-Stack engineer.
            <br />
            <br />
            I share my time to explore India,
            I like to get up early and start the day surfing, exercising or just taking a walk. Once back home and full of oxygen, I like to stretch, have a cup of coffee and start working :)
            <br />
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
