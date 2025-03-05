import Card from "react-bootstrap/Card";
import "./dish.scss";

function Dish({ img, nom, prix }) {
  return (
    <Card className="dish-card mb-4" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} alt={nom} />
      <Card.Body>
        <Card.Title>{nom}</Card.Title>
        <Card.Text>Prix: {prix} €</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Dish;
