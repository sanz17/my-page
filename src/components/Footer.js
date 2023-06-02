import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/sanz-logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-mark-white.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">

          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/sanhita-kundu-203229217/"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/sanz17"><img src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/sanzxzz/"><img src={navIcon3} alt="" /></a>
            </div>
            <p style={{
                'color': '#595959',
                'fontFamily': 'sans-serif',
            }}>
                Made with &#128149; by {' '}
                <a
                    style={{ 'textDecoration': 'none', 'color': '#595959', 'fontWeight': 'bolder' }}
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/sanz17">
                    Sanz
                </a>
                . Made with {' '}
                <a
                    style={{ 'textDecoration': 'none', 'color': '#595959', 'fontWeight': 'bolder' }}
                    target="_blank"
                    rel="noreferrer"
                    href="https://reactjs.org">
                    ReactJS 2023
                </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
