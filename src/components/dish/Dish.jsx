import Card from "react-bootstrap/Card";
import "./dish.scss";
import Badge from "react-bootstrap/Badge";

function Dish({ img, nom, prix, isNew }) {
  return (
    <Card className="dish-card mb-4">
      {isNew && (
        <Badge bg="danger" className="new-badge">
          Nouveau
        </Badge>
      )}
      <Card.Img variant="top" src={img} alt={nom} />
      <Card.Body>
        <Card.Title>{nom}</Card.Title>
        <Card.Text>Prix: {prix} €</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Dish;
