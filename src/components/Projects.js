import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/weathery.png";
import projImg2 from "../assets/img/toi.jpeg";
import projImg3 from "../assets/img/da.png";
import projImg4 from "../assets/img/sfs.png";
import projImg5 from "../assets/img/lungs.jpeg";
import h1 from "../assets/img/firebase.jpeg";
import h2 from "../assets/img/micro.png";
import h3 from "../assets/img/robo.png";

import blog from "../assets/img/blog.png"
import colorSharp2 from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const sfs = () => {
    window.location.href = 'https://github.com/sanz17/sfs-frontend';
  };

  const projects1 = [
    {
      title: "Weathery",
      description: "WeatherApp with ReactJS, OpenWeatherAPI",
      imgUrl: projImg1,
      
    },
    {
      title: "Times of India",
      description: "Frontend using ReactJS",
      imgUrl: projImg2,
    },
    {
      title: "DA reminder",
      description: "Chrome extension",
      imgUrl: projImg3,
    },
    {
      title: "Secure file storage",
      description: "Frontend using ReactJS",
      imgUrl: projImg4,
    },
    {
      title: "Pneumonia detection",
      description:"TensorFlow,SciKit,PyQt",
      imgUrl: projImg5,
    },
  ];

  const projects2=[
    {
      title:"Smart railgate",
      description:"8051 microcrontroller,GSM, servo and buzzers",
      imgUrl:h2
    },
    {
      title:"Monitor weather",
      description:"NodeMCU,Firebase,ReactJS",
      imgUrl:h1
    },
    {
      title:"3rd eye for the blind ",
      description:"Arduino,OpenCV,text-to-speech",
      imgUrl:h3
    }
  ]
  const projects3=[
    {
      title:"Coding the paintbrush to your webpage",
      description:"blog on medium",
      imgUrl:blog
    }
  ]


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>This is a small glimpse of the projects which I have been working on. You can get find the projects by clicling on my github account, on the navbar</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Software projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Hardware projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Blog</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
