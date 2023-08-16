import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.jpg";
import recipe from "../../Assets/Projects/recipe.png";
import template from "../../Assets/Projects/template.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
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
              imgPath={leaf}
              isBlog={false}
              title="Shopping-Site"
              description="In this project, I used Reactjs , Nodejs and Expressjs. It has two pages in which one of  them is Cart page. if product is selected then i put it in cart.We can apply filter on diifferent basis. 
              We use nodejs library faker to extract different data for product."
              ghLink="https://github.com/sameer3134/Shopping-site"
              demoLink="https://msshopping.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Website Template"
              description="Its a simple website in which we design a static web-template by using Reactjs and for css we use tailwind-css"
              ghLink="https://github.com/sameer3134/WebDesignTemplate"
               demoLink="https://sameer3134.github.io/WebDesignTemplate/"
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
