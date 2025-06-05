import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import kashika from "../../Assets/Projects/kashika.png";
import recipe from "../../Assets/Projects/recipe.png";
import template from "../../Assets/Projects/template.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import docaid from "../../Assets/Projects/docaid.png";
import romanelli from "../../Assets/romanelli.png"
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kashika}
              isBlog={false}
              title="Shopping-Site"
              description="In this project, I used React, TypeScript, Tailwind CSS, AWS. Developed an e-commerce platform featuring OAuth-based user authentication, real-time inventory management, and
order processing, powered by Firebase for backend services and secure hosting."
              ghLink="https://github.com/sameer3134/Ecommerce"
              demoLink="https://kashikatheshiningone.com/"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={romanelli}
              isBlog={false}
              title="Real Estate Platform Development"
              description="In this project, I used React , Tailwind CSS. Developed a responsive real estate platform based on detailed Figma designs, featuring dynamic property listings,
modern UI elements, and seamless third-party API integration"
              ghLink="https://github.com/sameer3134/romanelliGroup"
              demoLink="https://romanelligroup.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={docaid}
              isBlog={false}
              title="Clinic Management System"
              description="Built a scalable appointment and billing platform using ReactJS, Redux, and TailwindCSS, improving development speed and UI consistency by 30%.
Integrated Razorpay for subscription payments and WhatsApp for appointment confirmations, reducing checkout failures by 40% and boosting user engagement."
           ghLink="https://github.com/sameer31345/doc-aid"
               demoLink="https://doc-aid.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Packet Sniffing"
              description="I have completed this project in IIT-Roorkee. Packet Sniffer is used for capturing and monitor the network traffic through the installation
              of software on our device.It inspects and extract the valuable information such as passwords, IP addresses etc."
              ghLink="https://github.com/sameer3134/Internship"
              
            />
          </Col>

          

         

          
       
       
       
       
       
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipe}
              isBlog={false}
              title="Food-recipe"
              description="We use api to extract recipes. On the basis of ingredient search , it will show all the recipe can make from it. I used Reactjs in designing this website"
              ghLink="https://github.com/sameer3134/food-recipe"
               demoLink="https://msfoodrecipe.netlify.app//"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={template}
              isBlog={false}
              title="Website Template"
              description="I design a static website of consultancy services company by using Reactjs and Tailwind-css"
              ghLink="https://github.com/sameer3134/Osumare"
               demoLink="https://sameer3134.github.io/osumarecom/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
