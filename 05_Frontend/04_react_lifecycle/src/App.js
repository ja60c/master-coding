import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <>
    <h1>Personajes de Rick N Morty! 🌎</h1>
    <Card imagen="https://rickandmortyapi.com/api/character/avatar/8.jpeg" name="Jacqueline" species="humano" origin="Tierra"/>
    </>
  );   
}

export default App;
