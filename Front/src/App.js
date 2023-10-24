import "./App.css";
import Header from "../src/components/Header";
import Accueil from "./Pages/Accueil";
// import API from "./components/API.js";

export default function App() {
  return (
    <section>
      <h1>Game Power API</h1>
      <Header />
      <Accueil />
    </section>
  );
}
