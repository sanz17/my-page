import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import { Row, Col, Container } from "react-bootstrap";

export const Skills =() =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h1>Skills                            
                            </h1>
                            <p>I work in Javascript, HTML, CSS, </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )
}