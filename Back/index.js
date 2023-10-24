const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

mongoose.connect(
  "mongodb+srv://HerbillonMia:68Nr575aB7iSJnxd@herbillonmia.vsxvity.mongodb.net/GamePowerAPI"
);

// Définissez le schéma en dehors des routes
const listeSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

// Créez le modèle à partir du schéma
const Liste = mongoose.model("Game", listeSchema);

app.use(express.json());

// CREATE
app.post("/create", async (req, res) => {
  try {
    const { name } = req.body;

    const newListe = new Liste({
      name,
    });

    const createdListe = await newListe.save();

    res.status(201).json(createdListe);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la création de la liste." });
  }
});

// READ
app.get("/", async (req, res) => {
  try {
    const allItems = await Liste.find();
    res.json(allItems);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la lecture." });
  }
});

// UPDATE
app.put("/update/:id", async (req, res) => {
  try {
    const itemId = req.params.id; // ID de l'élément à mettre à jour
    const updatedData = req.body; // Les nouvelles données
    const updatedItem = await Liste.findByIdAndUpdate(itemId, updatedData, {
      new: true,
    });
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la mise à jour." });
  }
});

// DELETE
app.delete("/delete/:id", async (req, res) => {
  try {
    const itemId = req.params.id; // ID de l'élément à supprimer
    await Liste.findByIdAndRemove(itemId);
    res.json({ message: "Élément supprimé avec succès." });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la suppression." });
  }
});

// ALL ROUTE
app.all("*", (req, res) => {
  res.status(404).json("Cette route n'existe pas");
});

//SERVEUR
// const PORT = 3000; // Define the port

app.listen(3100, () => {
  console.log(`👩🏻‍💻`);
});
