import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/ml.jpg";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/Encryption.jpg";
import chatify from "../../Assets/Projects/shop.avif";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/currency.avif";

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
              title="E-Commerse Website using HTML , CSS , BootStrap , React JS"
              description="The E-commerse Website which is responsive for any device and User friendly so that user can able to use it easily and effectively."
              ghLink="https://github.com/vipultapare/E-Commerse"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Currency Convertor Using API"
              description="This project aims to convert the currency from one to another using public currency API.."
              ghLink="https://github.com/vipultapare/Currency-Convertor2"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Securing Confidential Files Using Encryption Algorithms"
              description="This Project is Aim is to secure the users confidential data using hybrid approach of DES and RSA algorithm"
              ghLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Detection Of Diabetic retinopathy using Yolo V8"
              description="This project has a aim to detect the diabetic retinoapthy disease in the early stage of its occurance using Yolo v8 this project not only detect the DR patches in the human eye it can also segment the defected areas in the human eye."
              ghLink="https://github.com/vipultapare/Detection-Of-Diabetic-Retinopathy"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
