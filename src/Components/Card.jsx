import "./Card.css";

const Card = ({ animalNombre, animalDescripcion }) => {
  return (
    <div className="card-container">
      <h2 className="card-title">Información del Animal:</h2>
      <p className="card-content">
        <strong>Nombre:</strong> {animalNombre}
      </p>
      <p className="card-content">
        <strong>Descripción:</strong> {animalDescripcion}
      </p>
    </div>
  );
};

export default Card;