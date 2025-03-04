import { BrowserRouter as Router } from "react-router-dom";
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
  const FilterDishes = dishes.filter((dishes) => dishes.stock > 0);
  const [showNewOnly, setShowNewOnly] = useState(false);

  const handleShowNewOnly = () => {
    setShowNewOnly((prev) => !prev);
  };

  const filteredDishes = dishes.filter(
    (dish) => dish.stock > 0 && (!showNewOnly || dish.isNew)
  );

  return (
    <Router>
      <Header />
      <main>
        <Container className="content">
          <Button
            variant="outline-primary mb-5
        "
            onClick={handleShowNewOnly}
          >
            {showNewOnly ? "Afficher tous les plats" : "Nouveautés uniquement"}
          </Button>
          <div>
            <Row>
              {filteredDishes.map((dish, index) => (
                <Col key={index} md={4}>
                  <Dish {...dish} />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
