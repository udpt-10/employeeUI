import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./index.scss";
import { Link } from "react-router-dom";
import {
  Checking,
  Details,
  Leave,
  OT,
  SalaryPath,
  Support,
  WFH,
} from "../constants";
const Navigation = () => {
  return (
    <>
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Container className="navigationHeader">
            <Navbar.Brand className="navbar">
              <Link to={Details}>Details</Link>
            </Navbar.Brand>
            <Navbar.Brand className="navbar" >
              <Link to={OT}>OT</Link>
            </Navbar.Brand>
            <Navbar.Brand className="navbar" >
              <Link to={Leave}>Leave</Link>
            </Navbar.Brand>
            <Navbar.Brand className="navbar" >
              <Link to={WFH}>WFH</Link>
            </Navbar.Brand>
            <Navbar.Brand className="navbar">
              <Link to={Support}>Support</Link>
            </Navbar.Brand>
            <Navbar.Brand className="navbar" >
              <Link to={Checking}>Checking</Link>
            </Navbar.Brand>
            <Navbar.Brand className="navbar">
              <Link to={SalaryPath}>Salary</Link>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default Navigation;
