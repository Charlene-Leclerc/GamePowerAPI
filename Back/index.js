const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://HerbillonMia:68Nr575aB7iSJnxd@herbillonmia.vsxvity.mongodb.net/GamePowerAPI",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Définissez le schéma en dehors des routes
const gameSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

// Créez le modèle à partir du schéma
const Game = mongoose.model("Game", gameSchema);

// CREATE
app.post("/create", async (req, res) => {
  try {
    const { name, price } = req.body;

    const newGame = new Game({
      name,
      price,
    });

    const createdGame = await newGame.save();

    res.status(201).json(createdGame);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la création du jeu." });
  }
});

// READ
app.get("/", async (req, res) => {
  try {
    const allGames = await Game.find();
    res.json(allGames);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la lecture." });
  }
});

// UPDATE
app.put("/update/:id", async (req, res) => {
  try {
    const itemId = req.params.id; // ID de l'élément à mettre à jour
    const updatedData = req.body; // Les nouvelles données
    const updatedGame = await Game.findByIdAndUpdate(itemId, updatedData, {
      new: true,
    });
    res.json(updatedGame);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la mise à jour." });
  }
});

// DELETE
app.delete("/delete/:id", async (req, res) => {
  try {
    const itemId = req.params.id; // ID de l'élément à supprimer
    await Game.findByIdAndRemove(itemId);
    res.json({ message: "Jeu supprimé avec succès." });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la suppression." });
  }
});

// ALL ROUTE
app.all("*", (req, res) => {
  res.status(404).json("Cette route n'existe pas");
});

//SERVEUR
const PORT = 3000; // Define the port

app.listen(PORT, () => {
  console.log(`👩🏻‍💻 Server is running on port ${PORT}`);
});
