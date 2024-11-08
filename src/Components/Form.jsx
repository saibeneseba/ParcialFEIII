import { useState } from "react";
import "./Form.css";

const Form = ({ onSubmit }) => {
    const [inputs, setInputs] = useState({ animalNombre: "", animalDescripcion: "" });

    const handleChange = (e) => {
        setInputs ({ ...inputs, [e.target.name]: e.target.value });

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(inputs);

    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="animalNombre">Nombre del Animal:</label>
            <input
              type="text"
              name="animalNombre"
              id="animalNombre"
              value={inputs.animalNombre}
              onChange={handleChange}
              placeholder="El nombre del Animal"
            />
          </div>
    
          <div>
            <label htmlFor="animalDescripcion">Descripción del Animal:</label>
            <input
              type="text"
              name="animalDescripcion"
              id="animalDescripcion"
              value={inputs.animalDescripcion}
              onChange={handleChange}
              placeholder="Descripción del Animal"
            />
          </div>
          <div className="button-container">
          <button type="submit">Enviar</button>
          </div>
        </form>
      );
    };
    
    export default Form;
