import React, { useState, useEffect } from "react";
import Papa from "papaparse"; // For parsing CSV

function Home() {
  const [ingredientsByType, setIngredientsByType] = useState({});

  useEffect(() => {
    // Function to fetch and parse the CSV file
    const fetchCSV = async () => {
      const response = await fetch("/data/ingredients.csv");
      const text = await response.text();
      const result = Papa.parse(text, { header: true });

      // Organize ingredients into groups based on their types
      const groupedIngredients = result.data.reduce((acc, ingredient) => {
        const { name, type } = ingredient;
        if (!acc[type]) {
          acc[type] = [];
        }
        acc[type].push(name);
        return acc;
      }, {});

      // Update state with grouped ingredients
      setIngredientsByType(groupedIngredients);
    };

    // Call the fetchCSV function
    fetchCSV();
  }, []);

  return (
    <div className="home">
      <div >
        {/* Render ingredients grouped by their types */}
        {Object.entries(ingredientsByType).map(([type, ingredients]) => (
          <div key={type} className="selectIngredients">
            <h2>{type}</h2>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
