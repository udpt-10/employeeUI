import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./index.scss";

const Footer = () => {
  return (
    <>
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Container className="footerNav">
            <Navbar.Brand className="navbar" href="#">
              Company Information
            </Navbar.Brand>
            <Navbar.Brand className="navbar" href="#">
              Company Rules
            </Navbar.Brand>
            <Navbar.Brand className="navbar" href="#">
              Support Number
            </Navbar.Brand>
            <Navbar.Brand className="navbar" href="#">
              Contractor
            </Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default Footer;
