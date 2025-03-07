import Card from "react-bootstrap/Card";
import "./dish.scss";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

import { useContext } from "react";
import { CartContext } from "../cartContext/CartContext";

function Dish({ img, name, price, isNew }) {
  const { addToCart } = useContext(CartContext);
  return (
    <Card className="dish-card mb-4">
      {isNew && (
        <Badge bg="primary" className="new-badge">
          Nouveau
        </Badge>
      )}
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Prix: {price} €</Card.Text>
      </Card.Body>
      <Button variant="outline-primary" onClick={() => addToCart()}>
        Ajouter au panier
      </Button>
    </Card>
  );
}

export default Dish;
