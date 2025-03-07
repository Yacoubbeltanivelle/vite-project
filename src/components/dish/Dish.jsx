import Card from "react-bootstrap/Card";
import "./dish.scss";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

import { useContext } from "react";
import { useCart } from "../../hooks/useCart";

function Dish({ img, name, price, isNew }) {
  const { dispatch } = useContext(useCart);
  return (
    <Card className="dish-card mb-4">
      {isNew && (
        <Badge bg="primary" className="new-badge">
          Nouveau
        </Badge>
      )}
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body className=" mb-4">
        <Card.Title>{name}</Card.Title>
        <Card.Text>Prix: {price} €</Card.Text>
      </Card.Body>
      <Button
        className=" mb-4"
        variant="outline-primary"
        onClick={() => dispatch({ type: "increment" })}
      >
        Ajouter au panier
      </Button>
      <Button variant="danger" onClick={() => dispatch({ type: "decrement" })}>
        Supprimer au panier
      </Button>
    </Card>
  );
}

export default Dish;
