import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import dishes from "./components/dish/Dishes";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Dish from "./components/dish/Dish";
import "./assets/App.scss";

function App() {
  const FilterDishes = dishes.filter((dishes) => dishes.stock > 0);

  return (
    <Router>
      <Header />
      <Container className="content">
        <div>
          <Row>
            {FilterDishes.map((dish, index) => (
              <Col key={index} md={4}>
                <Dish {...dish} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
