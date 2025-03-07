import { Navbar, Nav, Container, NavbarCollapse } from "react-bootstrap";
import "./Header.scss";
import logo from "../../assets/images/logo.png";

import { useContext } from "react";
import { useCart } from "../../hooks/useCart";

function Header() {
  const { cartCount } = useContext(useCart);

  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" className="logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Accueil</Nav.Link>
              <Nav.Item>Panier {cartCount}</Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
