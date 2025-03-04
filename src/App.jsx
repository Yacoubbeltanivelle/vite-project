import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <h1>Bienvenue sur la page d'accueil</h1>
    </Router>
  );
}

export default App;
