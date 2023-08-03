import "./App.css";
import StarShipCards from "./components/services/StarShipCards";
// import from react library
import { useState, useEffect } from "react";
import { getAllStarships } from "./components/services/Api";

function App() {
  const [starShips, setStarships] = useState([]);

  useEffect(() => {
    fetchStarships();
  }, []);

  async function fetchStarships() {
    try {
      const data = await getAllStarships();
      setStarships(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching starships:", error);
    }
  }

  return (
    <div className="App">
      <h1>Star Wars Starship</h1>
      <StarShipCards starShips={starShips} />
    </div>
  );
}

export default App;
