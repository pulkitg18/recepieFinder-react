import React from "react";
import "./Recepie.css";

function Recepie({ title, calories, image, ingredients }) {
  console.log("uhjdlghsulfgs", ingredients);
  return (
    <div className="Recepie">
      <h1>{title}</h1>

      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>

      <p>{calories}</p>
      <img className="image" src={image} alt="" />
    </div>
  );
}

export default Recepie;
