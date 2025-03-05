import Card from "react-bootstrap/Card";
import "./dish.scss";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

function Dish({ img, nom, prix, isNew }) {
  return (
    <Card className="dish-card mb-4">
      {isNew && (
        <Badge bg="primary" className="new-badge">
          Nouveau
        </Badge>
      )}
      <Card.Img variant="top" src={img} alt={nom} />
      <Card.Body>
        <Card.Title>{nom}</Card.Title>
        <Card.Text>Prix: {prix} €</Card.Text>
      </Card.Body>
      <Button
        variant="outline-primary"
        onClick={() =>
          alert("Le plat " + nom + " est maintenant dans votre panier")
        }
      >
        Ajouter au panier
      </Button>
    </Card>
  );
}

export default Dish;
