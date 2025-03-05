import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Dish from "./components/dish/Dish";
import "./assets/App.scss";

function App() {
  return (
    <Router>
      <Header />
      <Container className="content">
        <div>
          <Row>
            <Dish
              img="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
              nom="Tacos à l’unité"
              prix="3"
            />

            <Dish
              img="https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"
              nom="Enchiladas"
              prix="12"
            />

            <Dish
              img=" https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"
              nom=" Mole poblano"
              prix="15"
            />
          </Row>
        </div>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
