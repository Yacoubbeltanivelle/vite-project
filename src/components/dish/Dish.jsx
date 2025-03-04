
function Dish({ img, nom, prix }) {
  return (
    <div>
      <img src={img} alt={nom} />
      <h2>{nom}</h2>
      <p>{prix} €</p>
    </div>
  );
}

export default Dish;
