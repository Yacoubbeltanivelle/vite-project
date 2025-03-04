import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <h1>Bienvenue sur la page d'accueil</h1>
      <Footer />
    </Router>
  );
}

export default App;
