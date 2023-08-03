const STARSHIPS_API_URL = "https://swapi.dev/api/starships/";

export async function getAllStarships() {
  try {
    const res = await fetch(STARSHIPS_API_URL);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching starships:", error);
    return [];
  }
}
