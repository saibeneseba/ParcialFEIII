import { useState } from "react";
import './App.css'
import Card from './Components/Card';
import Form from './Components/Form';

const App = () => {
  const [animalData, setAnimalData] = useState(null);
  const [error, setError] = useState("");
  const handleFormSubmit = (data) => {

    const { animalNombre, animalDescripcion } = data;

    if (
      animalNombre.trim().length < 3 || animalDescripcion.length < 6 
    ) {
      setError("Por favor chequea que la información sea correcta");
      setAnimalData(null);
    } else {
      setError("");
      setAnimalData(data);
    }
  };

  return (
    <div>
      <h1>Elige un animal</h1>
      <Form onSubmit={handleFormSubmit} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {animalData && (
        <Card
          animalNombre={animalData.animalNombre}
          animalDescripcion={animalData.animalDescripcion}
        />
      )}
    </div>
  );
};

export default App;