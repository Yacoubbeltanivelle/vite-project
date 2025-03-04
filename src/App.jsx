import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Dish from "./components/dish/Dish";

function App() {
  return (
    <Router>
      <Header />
      <h1>Bienvenue sur la page d'accueil</h1>
      <div>
        <h1>Nos Plats</h1>
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
      </div>

      <Footer />
    </Router>
  );
}

export default App;
