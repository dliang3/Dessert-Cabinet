import "./Home.css";

function Home() {
  return (
    <div className="home">
      <p>What is in your pantry?</p>
      <div class="selectIngredients">
        <label for="ingredients">Select Ingredients:</label>
        <select id="ingredients" multiple>
          <option value="Broccoli">Broccoli</option>
          <option value="Corn">Corn</option>
          <option value="Cucumber">Cucumber</option>
          <option value="Tomato">Tomato</option>
          <option value="Mushroom">Mushroom</option>
          <option value="Garlic">Garlic</option>
          <option value="Onion">Onion</option>
          <option value="Brinjal">Brinjal</option>
        </select>
      </div>
    </div>
  );
}

export default Home;
