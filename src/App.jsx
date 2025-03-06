import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import dishes from "./components/dish/Dishes";
import Button from "react-bootstrap/Button";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Dish from "./components/dish/Dish";
import "./assets/App.scss";
import { useState } from "react";

function App() {
  const [showNewOnly, setShowNewOnly] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleShowNewOnly = () => {
    setShowNewOnly((prev) => !prev);
  };

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const filteredDishes = dishes.filter(
    (dish) => dish.stock > 0 && (!showNewOnly || dish.isNew)
  );

  return (
    <>
      <Header cartCount={cartCount} />
      <main>
        <Container>
          <Button variant="outline-primary mb-5" onClick={handleShowNewOnly}>
            {showNewOnly ? "Afficher tous les plats" : "Nouveautés uniquement"}
          </Button>

          <Row>
            {filteredDishes.map((dish, index) => (
              <Col key={index} md={4}>
                <Dish {...dish} addToCart={addToCart} />
              </Col>
            ))}
          </Row>
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
