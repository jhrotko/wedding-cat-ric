import { useState } from "react";
import "./MealForm.css";

const MealForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [isVegetarian, setIsVegetarian] = useState("Não");
  const [foodRestrictions, setFoodRestrictions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nVegetarian: ${isVegetarian}`);
  };

  return (
    <div>
      <h2>Confirma a tua presença</h2>
      <form onSubmit={handleSubmit} className="meal-div meal-dir-col">
        <div className="meal-div">
          <label>
            Nome:{" "}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Apelido:{" "}
            <input
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />
          </label>
        </div>

        <div>
            No copo de água, quer optar pela refeição vegetariana?
          <label>
            <input
              type="radio"
              name="vegetarian"
              value="Sim"
              checked={isVegetarian === "Sim"}
              onChange={(e) => setIsVegetarian(e.target.value)}
            />
            Sim
          </label>

          <label>
            <input
              type="radio"
              name="vegetarian"
              value="Não"
              checked={isVegetarian === "Não"}
              onChange={(e) => setIsVegetarian(e.target.value)}
              style={{ fontSize: "90px" }}
            />
            Não
          </label>
        </div>

        <div>
          <label>
            Alguma restrição alimentar? (Opcional)
            <textarea
              value={foodRestrictions}
              onChange={(e) => setFoodRestrictions(e.target.value)}
              rows="10"
              cols="80"
              placeholder="E.g. gluten-free, intolerante a lactose..."
              style={{ flex: 1, marginTop: "0.5rem" }}
            />
          </label>
        </div>

        <button type="submit" style={{width:"15rem", height:"2rem"}}>Confirmar presença</button>
      </form>
    </div>
  );
};

export default MealForm;
