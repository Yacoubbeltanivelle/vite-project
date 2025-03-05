import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.scss";
import logo from "../../assets/images/logo.png";

function Navigation() {
  return (
    <Navbar>
      <Container>
        <Navbar expand="lg" fixed="top" className="bg-body-tertiary">
          <Container bg="dark">
            <img src={logo} alt="Logo" className="logo" />
            <Navbar.Brand href="/">Accueil</Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default Navigation;
