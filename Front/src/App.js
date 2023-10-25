import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Accueil from "./Pages/Accueil"; // Votre composant Accueil

import Header from "./components/Header";
import GameId from "./Pages/gameId";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path={`/game/:id`} element={<GameId />} />
      </Routes>
    </Router>
  );
}

export default App;
