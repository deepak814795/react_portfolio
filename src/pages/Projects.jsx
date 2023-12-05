import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import object from "../assets/projects/object.jpeg";
import book from "../assets/projects/book.jpeg";
import krypto from "../assets/projects/thumb-2.png";
import video from "../assets/projects/video.jpeg";
import weather from "../assets/projects/weather1.jpg";
import netflix from "../assets/projects/netflix.webp";
const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              isBlog={false}
              title="Bookstore Full-Stack App"
              description="This is online E-Commerce Bookstore web application. I used react.js, material ui and javascript for frontend and node.js, express js for backend. Users information are stored on No SQL database Mongo DB. Users can sign-up/login, purchase books and can make payments using razorpay gateway. There are extra features like adding books to cart and wishlist, Filters can be applied according to price range of user."
              ghLink="https://github.com/deepak814795/Bookstore_e-commerce"
              demoLink="https://64acfe9e1360c149c010d1c6--rad-pastelito-4cbb81.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={object}
              isBlog={false}
              title="Object Detection Model"
              description="This is a realtime Object Detection Model made using Tensorflow and Coco-ssd dataset that can easily classify over 80 objects. The model was integrated into web applications with the help of react.js through which it can be hosted online."
              ghLink="https://github.com/deepak814795/object_detection_ML"
              demoLink="https://64b75cc1af2fd3406c9d2378--capable-griffin-404c4a.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={video}
              isBlog={false}
              title="Video Conferencing App"
              description="This is a video conferencing applications designed using Typescript, React.js, Material-UI as frontend stack. Users sign-up, login using google Firebase authentication and can create live meetings or schedule future meetings. Users and meeting informations are stored in google's Firestore. There is extra features like sharing screen and text chat."
              ghLink="https://github.com/deepak814795/video_conference"
              demoLink="https://650e9d5ecb64f607cab9fc99--zesty-malasada-ef6f68.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Streaming Platform"
              description="This is a movie streaming platform developed using react.js and material ui. TMDB API is being used to continous update for latest movies. Users can sort movies according to genres and ratings."
              ghLink="https://github.com/deepak814795/streaming-platform"
              demoLink="https://647f122bb45fb611b88401a1--symphonious-mermaid-2824be.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Realtime Code Editor"
              description="This is a real time code editor. Supported languages are HTML5, CSS and Javascript. Users can see a instant live preview of their code and debug it."
              ghLink="https://github.com/deepak814795/weather-app"
              demoLink="https://64749890cc503575546b2116--funny-tulumba-14e996.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Applications"
              description="This a weather applications that shows live weather of any part of the world. This can be done using accuweather API."
              ghLink="https://github.com/deepak814795/weather-app"
              demoLink="https://nimbus-weather-app.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects