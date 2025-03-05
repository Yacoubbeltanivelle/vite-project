import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.scss";

function Navigation() {
  return (
    <Navbar>
      <Container>
        <Navbar expand="lg" fixed="top" className="bg-body-tertiary">
          <Container bg="dark">
            <img
              src="https://cdn.pixabay.com/photo/2018/03/26/14/18/man-3262834_960_720.png"
              alt="Logo"
              className="logo"
            />
            <Navbar.Brand href="/">Accueil</Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default Navigation;
